import React, { useContext, useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import coverImg from "../../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu/useMenu";
import { useParams } from "react-router-dom";
import { AuthContext } from "./../../../providers/AuthProvider";

import OrderTab from "./../OrderTab/OrderTab";
const Order = () => {
  // const { loading } = useContext(AuthContext);
  // if (loading) {
  //   return <progress className="w-full progress"></progress>;
  // }
  const categories = [
    "salad",
    "pizza",
    "soup",
    "desserts",
    "drinks",
    "offered",
  ];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  // console.log(category);
  const [menu] = useMenu();
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
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={offered}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
