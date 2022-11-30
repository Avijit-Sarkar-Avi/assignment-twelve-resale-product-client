import React from 'react';


const CategoryCardDetails = ({ datas, setBooking }) => {



    const { product, image, location, resalePrice, orginalPrice, year, userName, addedDate } = datas;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} className='w-32 h-32' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product}</h2>
                    <h2 className='text-2xl'>User Name: {userName}</h2>
                    <p>Location: {location}</p>
                    <p>Resale Price: {resalePrice}</p>
                    <p>Orginal Price: {orginalPrice}</p>
                    <p>Uses Year: {year}</p>
                    <p>Post Date: {addedDate?.slice(0, 10)}</p>
                    <div className="card-actions justify-end">
                        <label
                            onClick={() => setBooking(datas)}
                            htmlFor="booking-modal" className="btn btn-sm btn-success">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCardDetails;