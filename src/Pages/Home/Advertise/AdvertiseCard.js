import React from 'react';

const AdvertiseCard = ({ data }) => {

    const { image, product, location, resalePrice } = data;

    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img src={image} className='w-48 h-32' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product}</h2>
                    <p>Location: {location}</p>
                    <p>Resale Price: {resalePrice}</p>
                    {/* <div className="card-actions justify-end">
                        <label
                            onClick={() => setBooking(datas)}
                            htmlFor="booking-modal" className="btn btn-sm btn-success">Book Now</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default AdvertiseCard;