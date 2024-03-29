import React from 'react';
import { Helmet} from "react-helmet-async";
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import MenuCategory from '../MenuCategory/MenuCategory';
import useMenu from '../../../hooks/useMenu/useMenu';

//all img
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item=> item.category === 'offered')
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const soup = menu.filter((item) => item.category === "soup");
    return (
        <div className='space-y-8'>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'Our Menu'}></Cover>
            <MenuCategory
                items={offered}
               
            ></MenuCategory>
            
            <MenuCategory
                items={dessert}
                title={'desserts'}
                img={dessertImg}
            ></MenuCategory>
            
            <MenuCategory
                items={pizza}
                title={'Pizza'}
                img={pizzaImg}
            ></MenuCategory>
            <MenuCategory
                items={salad}
                title={'salad'}
                img={saladImg}
            ></MenuCategory>
            <MenuCategory
                items={soup}
                title={'soup'}
                img={soupImg}
            ></MenuCategory>
           
        </div>
    );
};

export default Menu;