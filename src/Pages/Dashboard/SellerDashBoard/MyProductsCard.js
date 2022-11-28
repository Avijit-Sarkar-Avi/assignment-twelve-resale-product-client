import React from 'react';
import toast from 'react-hot-toast';

const MyProductsCard = ({ product }) => {

    const { product: productName, image, resalePrice, category, _id } = product;

    const handleAdvertise = _id => {
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Advertise successfully')
                }
            })
    }

    const handleDeleteProduct = _id => {
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    // refetch();
                    toast.success(`${productName} deleted successfully`);
                }
            })
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">

                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleDeleteProduct(_id)}
                        className="btn btn-square btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                <figure className="px-5 pt-5">
                    <img src={image} alt="pic" className="rounded-xl w-32 h-32" />
                </figure>
                <div className="card-body items-center">

                    <h2 className="card-title">{productName}</h2>
                    <p>Price: {resalePrice}</p>
                    <p>Category: {category}</p>

                    <div className="card-actions">
                        {
                            product?.isAdvertise !== 'advertise' &&
                            <button className="btn btn-accent btn-xs"
                                onClick={() => handleAdvertise(_id)}>
                                Advertise</button>
                        }
                    </div>
                </div>
            </div>
        </div >

    );
};

export default MyProductsCard;