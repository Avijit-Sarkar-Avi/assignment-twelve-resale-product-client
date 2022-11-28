import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MyProductsCard from './MyProductsCard';

const MyPorducts = () => {

    const { data: products, } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/products`, {
                });

                const data = await res.json();
                return data;

            }
            catch (error) {

            }
        }
    })

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                products?.map(product => <MyProductsCard
                    key={product._id}
                    product={product}
                ></MyProductsCard>)


            }
        </div>
    );
};

export default MyPorducts;