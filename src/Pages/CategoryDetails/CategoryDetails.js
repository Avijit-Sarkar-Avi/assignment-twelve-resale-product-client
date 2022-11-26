import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {

    const [product, setProduct] = useState([]);

    const { _id } = useLoaderData();

    useEffect(() => {
        fetch(`http://localhost:5000/cardData/${_id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [_id])

    return (
        <div>
            <h3 className='text-2xl text-center text-cyan-500'>Circuit Module Name: {product.name}</h3>

        </div>
    );
};

export default CategoryDetails;