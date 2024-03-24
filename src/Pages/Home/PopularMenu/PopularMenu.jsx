import React, { useEffect, useState } from 'react';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import PopularItem from './PopularItem';
import useMenu from '../../../hooks/useMenu/useMenu';
import MenuCategory from '../../Menu/MenuCategory/MenuCategory';

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
          <MenuCategory items={popular}></MenuCategory>
        </section>
    );
};

export default PopularMenu;