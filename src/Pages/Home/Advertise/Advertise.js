import React, { useEffect, useState } from 'react';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {

    const [addData, setAddData] = useState([])

    useEffect(() => {
        fetch('https://server-phi-three.vercel.app/products/advertise')
            .then(res => res.json())
            .then(data => setAddData(data))
    }, [])

    console.log(addData);

    return (
        <div className='grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {
                addData?.map(data => <AdvertiseCard
                    key={data._id}
                    data={data}
                ></AdvertiseCard>)
            }
        </div>
    );
};

export default Advertise;