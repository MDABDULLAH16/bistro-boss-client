import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Cartegory/Category";
import ChefService from "./ChefSecvice/ChefService";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <ChefService></ChefService>
    </div>
  );
};

export default Home;
