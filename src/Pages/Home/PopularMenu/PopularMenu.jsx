import React, { useEffect, useState } from 'react';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import PopularItem from './PopularItem';
import useMenu from '../../../hooks/useMenu/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu,setMenu]= useState([])

    // useEffect(()=>{
    //     fetch('menu.json').then(res=> res.json()).then(data =>{
    //         const popularItem = data.filter( item=> item.category === 'popular')
           
    //         setMenu(popularItem)
    //     })
    // },[])
    return (
        <section className='my-8'>
            <SectionTitle
            subHeading={'Popular Menu'}
            heading={'From Our Menu'}
            ></SectionTitle>
           <div className='grid md:grid-cols-2 gap-4'>
            {popular.map(item=> <PopularItem key={item._id} item={item}></PopularItem>)}
           </div>
                <div className='text-center'>
                    <button className='btn btn-outline border-0 border-b-4'>View Full Menu</button>
                </div>
        </section>
    );
};

export default PopularMenu;