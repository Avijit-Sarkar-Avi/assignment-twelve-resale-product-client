import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyProductsCard from './MyProductsCard';

const MyPorducts = () => {


    const { user } = useContext(AuthContext);

    const { data: products = [] } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://server-phi-three.vercel.app/products?email=${user?.email}`);
            const data = await res.json();
            return data;
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