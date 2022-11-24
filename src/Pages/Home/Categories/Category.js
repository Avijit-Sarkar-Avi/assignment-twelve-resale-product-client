import React from 'react';

const Category = ({ card }) => {
    const { name, description, icon } = card;
    return (
        <div className="card card-side px-6 bg-base-100 shadow-xl">
            <figure><img src={icon} alt="Movie" className='lg:w-96 lg:h-20' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Purchase Now</button>
                </div>
            </div>
        </div>
    );
};

export default Category;