import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category'

const Categories = () => {

    // const [cardData, setCardData] = useState([]);

    const { data: cardData = [] } = useQuery({
        queryKey: ['cardData'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/cardData');
            const data = await res.json();
            return data
        }
    })

    // useEffect(() => {
    //     fetch('http://localhost:5000/cardData')
    //         .then(res => res.json())
    //         .then(data => setCardData(data))
    // }, [])

    // const cardData = [
    //     {
    //         id: 1,
    //         name: 'Arduino',
    //         description: 'We have good and fresh quality of Arduino circuit.',
    //         icon: "https://i.ibb.co/pZMGLtm/arduino-Image.webp"
    //     },
    //     {
    //         id: 2,
    //         name: 'RaspberryPi',
    //         description: 'RaspberryPI that can easyly connect with pc by bluetooth and good quality.',
    //         icon: "https://i.ibb.co/gyBv4jC/raspberrypi-Image.png"
    //     },
    //     {
    //         id: 3,
    //         name: 'AVR',
    //         description: 'We have good and fresh quality of AVR microcontroller.',
    //         icon: "https://i.ibb.co/qnnps8h/avrImage.png"
    //     },
    // ]
    return (
        <div className='grid lg:grid-cols-3 gap-10'>

            {
                cardData?.map(card => <Category
                    key={card.id}
                    card={card}
                ></Category>)
            }
        </div>
    );
};

export default Categories;