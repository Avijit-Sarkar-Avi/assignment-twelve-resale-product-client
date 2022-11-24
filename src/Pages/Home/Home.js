import React from 'react';
import useTitle from '../../Hooks/useTitle';
import bannerImage from '../../asset/banner.jpg'

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <div className="hero min-h-screen"
                style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl lg:text-5xl font-bold">BuySale.com</h1>
                        <p className="mb-5 lg:text-xl">
                            <p>We easy to your sell your product at a good price </p>
                            <p> The Buyer get the best product in his limited price.</p>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;