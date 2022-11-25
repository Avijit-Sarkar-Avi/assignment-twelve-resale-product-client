import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ card }) => {
    const { name, description, icon, _id } = card;
    return (
        <div className="card card-side px-6 bg-base-100 shadow-xl">
            <figure><img src={icon} alt="Movie" className='lg:w-96 lg:h-20' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/category/${_id}`}>
                        <button className="btn btn-primary">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Category;