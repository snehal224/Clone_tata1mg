import React from "react";
import LastFooter from "../Components/LastFooter";
import { Navbar_dropdown } from "../Navbar/Components/Navbar_dropdown";
import { Navbar_search } from "../Navbar/Components/Navbar_search";
import { Navbar } from "../Navbar/Components/Navbar";
import FeaturedBrand from "../Productdiv/components/FeaturedBrand";

import Flashdeals from "./Home_products/FlashDeals.jsx";
import Trending from "./Home_products/Trending.jsx";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f1f4f6" }}>
      <Navbar />
      <Navbar_search />
      <Navbar_dropdown />
      <FeaturedBrand />
      <Trending />
      <Flashdeals />
      <LastFooter />
    </div>
  );
};

export default Home;
