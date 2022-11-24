import React from 'react';
import useTitle from '../../Hooks/useTitle';
import bannerImage from '../../asset/banner.jpg'
import stripeImage from '../../asset/stripe.jpg'
import Categories from './Categories/Categories';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <div className="hero min-h-screen"
                style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl lg:text-5xl font-bold">BuySalerCKT.com</h1>
                        <p className="mb-5 lg:text-xl">
                            <p>We easy to your sell your product at a good price </p>
                            <p> The Buyer get the best product in his limited price.</p>
                        </p>
                    </div>
                </div>
            </div>

            <div className='mt-20 mb-10 ml-5 mr-5'>
                <h3 className='text-2xl text-center text-cyan-400 font-bold'>Choose Your Brand:</h3>
                <Categories></Categories>
            </div>

            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={stripeImage} alt="" className="lg:h-52 lg:w-96 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Get 20% Discount</h1>
                        <p className="py-6">Payment by Stripe and get 20% discount for every product.</p>
                        <button className="btn btn-primary">Happy Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;