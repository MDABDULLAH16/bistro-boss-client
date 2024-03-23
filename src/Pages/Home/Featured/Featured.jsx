import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './featured.css'
const Featured = () => {
    return (
        <div className='featured-img  text-white  '>
            <div className=' pt-4 h-fit bg-gradient-to-r from-[#151515] to-[#rgba(21, 21, 21, 0.70)]'>
            <SectionTitle className='mt-8'  subHeading={'Featured Item'} heading={'From Featured Menu'}></SectionTitle>
            <div className='flex items-center justify-center gap-8 '>
                <div className='p-14'>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='text-2xl'>
                    <p>March 23,2024</p>
                    <p className='uppercase'>Where Can i get Some?</p>
                    <p>Fast food is a convenient option for many people due to its quick service and readily available meals. However, frequent consumption of fast food can contribute to health problems such as obesity and heart disease.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;