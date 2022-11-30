import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import CategoryCardDetails from './CategoryCardDetails';

const CategoryDetails = () => {

    // const [product, setProduct] = useState([]);

    // const { _id } = useLoaderData();

    // useEffect(() => {
    //     fetch(`https://server-phi-three.vercel.app/cardData/${_id}`)
    //         .then(res => res.json())
    //         .then(data => setProduct(data))
    // }, [_id])


    // const { category } = useLoaderData();
    // console.log(category)

    const { name } = useParams()
    console.log(name)

    const { data: categoryData = [] } = useQuery({
        queryKey: ['products', name],
        queryFn: async () => {
            const res = await fetch(`https://server-phi-three.vercel.app/products/category?category=${name}`);
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    const [booking, setBooking] = useState(null);

    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 m-10'>

                {
                    categoryData?.map(datas => <CategoryCardDetails
                        key={datas._id}
                        datas={datas}
                        setBooking={setBooking}
                    ></CategoryCardDetails>)
                }

            </div>
            {booking &&
                <BookingModal
                    booking={booking}
                    setBooking={setBooking}
                ></BookingModal>
            }
        </div>
    );
};

export default CategoryDetails;