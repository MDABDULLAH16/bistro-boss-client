import React, { useEffect, useState } from 'react';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import PopularItem from './PopularItem';

const PopularMenu = () => {
    const [menu,setMenu]= useState([])

    useEffect(()=>{
        fetch('menu.json').then(res=> res.json()).then(data =>{
            const popularItem = data.filter( item=> item.category === 'popular')
           
            setMenu(popularItem)
        })
    },[])
    return (
        <section>
            <SectionTitle
            subHeading={'Popular Menu'}
            heading={'From Our Menu'}
            ></SectionTitle>
           <div className='grid md:grid-cols-2 gap-4'>
            {menu.map(item=> <PopularItem key={item._id} item={item}></PopularItem>)}
           </div>

        </section>
    );
};

export default PopularMenu;