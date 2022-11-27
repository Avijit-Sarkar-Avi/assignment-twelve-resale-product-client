import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import useTitle from '../../../Hooks/useTitle';

const AddAProduct = () => {

    useTitle('Add A Product')

    const { register, formState: { errors }, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey)

    const { data: categories, isLoading } = useQuery({

        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category')
            const data = await res.json();
            return data;
        }

    })

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const product = {
                        product: data.name,
                        resalePrice: data.resalePrice,
                        phone: data.phone,
                        condition: data.condition,
                        location: data.location,
                        category: data.category,
                        orginalPrice: data.orginalPrice,
                        year: data.year,
                        description: data.description,
                        image: imgData.data.url
                    }
                    //save product information

                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                        })
                }
            })
    }

    if (isLoading) {
        return <button className="btn btn-square loading"></button>
    }

    return (
        <div className='w-96 p-7'>
            <h2 className='text-2xl'>Add Product</h2>

            <form onSubmit={handleSubmit(handleAddProduct)}>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text"
                        {...register("name",
                            { required: "Write your full name" })}
                        placeholder="Name of Product"
                        className="input input-bordered" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resale Price</span>
                    </label>
                    <input type="text"
                        {...register("resalePrice",
                            { required: 'Price is required' })}
                        placeholder="Resale Price of Product" className="input input-bordered" />
                    {errors.resalePrice && <p className='text-red-600'>{errors.resalePrice?.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone No</span>
                    </label>
                    <input type="text"
                        {...register("phone",
                            {
                                required: 'Phone no is required'
                            })}
                        placeholder="Enter the Phone No" className="input input-bordered" />
                    {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Condition Type</span>
                    </label>
                    <select
                        {...register("condition", { required: true })} className="input input-bordered">
                        <option value='excellent'>Excellent</option>
                        <option value='good'>Good</option>
                    </select>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text"
                        {...register("location",
                            { required: "Write your Loaction" })}
                        placeholder="Your Location"
                        className="input input-bordered" />
                    {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Category</span>
                    </label>
                    <select
                        {...register("category", { required: true })} className="input input-bordered">
                        {
                            categories?.map(category =>
                                <option key={category._id}
                                    value={category.name}>
                                    {category.name}</option>
                            )
                        }
                    </select>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Orginal Price</span>
                    </label>
                    <input type="text"
                        {...register("orginalPrice",
                            { required: 'Orginal Price is required' })}
                        placeholder="Orginal Price of Product" className="input input-bordered" />
                    {errors.orginalPrice && <p className='text-red-600'>{errors.orginalPrice?.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Year of purchase</span>
                    </label>
                    <input type="text"
                        {...register("year",
                            { required: 'Purchase year is required' })}
                        placeholder="Purchase year of Product" className="input input-bordered" />
                    {errors.year && <p className='text-red-600'>{errors.year?.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea type="text"
                        {...register("description",
                            { required: 'Description is required' })}
                        placeholder="Description of Product" className="textarea textarea-bordered" />
                    {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Image</span>
                    </label>
                    <input type="file"
                        {...register("image",
                            { required: "Photo is required" })}

                        className="input input-bordered" />
                    {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                </div>

                <br />
                <input className='btn w-full btn-accent' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddAProduct;