import React from 'react';
import ArduinoImage from '../../../asset/arduinoImage.jpg'
import RaspberrypiImage from '../../../asset/raspberrypiImage.jpg'
import AvrImage from '../../../asset/avrImage.jpg'
import Category from './Category';

const Categories = () => {
    const cardData = [
        {
            id: 1,
            name: 'Arduino',
            description: 'We have good and fresh quality of Arduino circuit.',
            icon: ArduinoImage
        },
        {
            id: 2,
            name: 'RaspberryPi',
            description: 'RaspberryPI that can easyly connect with pc by bluetooth and good quality.',
            icon: RaspberrypiImage
        },
        {
            id: 3,
            name: 'AVR',
            description: 'We have good and fresh quality of AVR microcontroller.',
            icon: AvrImage
        },
    ]
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