import React from 'react';
import './Banner.css';
import banner from '../../../images/Banner/5.jpg'
const Banner = () => {
    return (
        <div>
            <img className="mt-5 mb-5 w-75 h-50 img-fluid"src={banner} alt="" />
        </div>
    );
};

export default Banner;