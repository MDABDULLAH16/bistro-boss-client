import React from 'react';
import './chefService.css'

const ChefService = () => {
   
    return (
    <div className=' chef-img flex items-center justify-center bg-no-repeat  h-[572px]'> 
           <div className=' bg-white w-11/12  flex flex-col justify-center items-center md:h-[333px] text-center mx-auto'>
            <div  className=' w-10/12 '>
            <h1 className='uppercase text-4xl font-bold '>Bistro Boss</h1>
            <p className='text-center'>Chef-services offer tailored culinary expertise for events, crafting exquisite dishes to suit diverse tastes and dietary needs. With personalized menus and meticulous execution, they elevate dining experiences, leaving a lasting impression. Additionally, they provide consultation and menu planning services to ensure every detail exceeds expectations.</p>
            </div>
           </div>
        </div>
    );
};

export default ChefService;