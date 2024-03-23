import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Cartegory/Category";
import ChefService from "./ChefSecvice/ChefService";
import PopularMenu from "./PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <ChefService></ChefService>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
    </div>
  );
};

export default Home;
