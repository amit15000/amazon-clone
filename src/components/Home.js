import React from "react";
import "./Home.css";
import Product from "./Products/Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          // src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg"
          // src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/July/Onecard/Deals-Unrec-PC-3000._CB598889662_.jpg
          //   "
          // src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/Hero_3000x12001._CB592142345_.jpg"

          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product />
          <Product />
        </div>
        <div className="home_row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home_row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
