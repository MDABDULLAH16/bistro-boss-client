import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Cartegory/Category";
import ChefService from "./ChefSecvice/ChefService";
import PopularMenu from "./PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";
import CallUs from "./CallUs/CallUs";
import Recommend from "./Recommend/Recommend";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <ChefService></ChefService>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <Recommend></Recommend>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
