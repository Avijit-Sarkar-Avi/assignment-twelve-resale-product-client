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
            Show the category Details
        </div>
    );
};

export default CategoryDetails;