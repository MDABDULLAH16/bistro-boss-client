import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";
const Testimonials = () => {
    const [reviews,setReviews]= useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/reviews")
          .then((res) => res.json())
          .then((data) => setReviews(data));
    },[])
    return (
        <section className='my-12'>
            <SectionTitle
            subHeading={"What Our Clients Say"}
            heading={'Testimonials'}
            >

            </SectionTitle>
            <FaQuoteLeft className='text-4xl mx-auto' />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper  mx-12">
            <div className=''>
               
                {reviews.map(review=>  <SwiperSlide key={review._id}>
                    <div className='flex flex-col items-center justify-center  m-8 text-center space-y-4 px-8'>
                    <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                        <p className='text-2xl'>{review.details}</p>
                        <h2 className='text-3xl font-bold text-orange-500'>{review.name}</h2>
                    </div>
                </SwiperSlide>)}
            </div>
       
       
      </Swiper>
            
        </section>

    );
};

export default Testimonials;