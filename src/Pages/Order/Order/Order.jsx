import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import coverImg from '../../../assets/shop/banner2.jpg'
import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from '../../../hooks/useMenu/useMenu';
import FoodCard from '../FoodCard/FoodCard';
import { useParams } from 'react-router-dom';
const Order = () => {
    const categories = ['salad','pizza','soup','desserts','drinks','offered']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    console.log(category);
    const [menu] = useMenu()
     const drinks = menu.filter((item) => item.category === "drinks");
     const dessert = menu.filter((item) => item.category === "dessert");
     const pizza = menu.filter((item) => item.category === "pizza");
     const salad = menu.filter((item) => item.category === "salad");
     const soup = menu.filter((item) => item.category === "soup");
     const offered = menu.filter((item) => item.category === "offered");
    return (
      <div>
        <Helmet>
          <title>Bistro Boss | Food Order</title>
        </Helmet>
        <Cover img={coverImg} title={"Oder Food"}></Cover>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
            <Tab>OFFERED</Tab>
          </TabList>
          <TabPanel>
           <FoodCard items={salad}></FoodCard>
          </TabPanel>
                <TabPanel>
                    <FoodCard items={pizza}></FoodCard>
          </TabPanel>
                <TabPanel>
                    <FoodCard items={soup}></FoodCard>
          </TabPanel>
                <TabPanel>
                    <FoodCard items={dessert}></FoodCard>
          </TabPanel>
                <TabPanel>
                    <FoodCard items={drinks}></FoodCard>
          </TabPanel>
                <TabPanel>
                    <FoodCard items={offered}></FoodCard>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default Order;