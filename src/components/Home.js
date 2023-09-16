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

          src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/julyatf23/unrec/one/WA_ETH_3000._CB598906425_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="1289745"
            title="Lean Startup: The Million Copy Bestseller Driving Entrepreneurs to Success Paperback – 1"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="1547845"
            title="OPPO F23 5G (Bold Gold, 8GB RAM, 256GB Storage) | 5000 mAh Battery with 67W SUPERVOOC Charger | 64MP Rear Triple AI Camera with Microlens | 6.72 FHD+ 120Hz Display | with Offers"
            price={180}
            image="https://m.media-amazon.com/images/I/81t-iyg0JfL._SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="1798345"
            title="Mizzific Women's Vichitra Silk Bollywood Style Embroidery Work Saree With Blouse Piece"
            price={35}
            image="https://m.media-amazon.com/images/I/81FJfolUufS._UY550_.jpg"
            rating={3}
          />
          <Product
            id="1212345"
            title="Fire-Boltt Newly Launched Ninja Call Pro Max 2.01” Display Smart Watch, Bluetooth Calling, 120+ Sports Modes, Health Suite, Voice Assistance (Grey)"
            price={49.99}
            image="https://m.media-amazon.com/images/I/61ZrPtiuqSL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="12323423"
            title="Mizzific Women's Vichitra Silk Bollywood Style Embroidery Work Saree With Blouse Piece"
            price={35}
            image="https://m.media-amazon.com/images/I/81FJfolUufS._UY550_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="1232345"
            title="Samsung 34-inches 86.42cm LED Odyssey G5 Ultra WQHD, 165 Hz, 1ms, 1000R Curved Gaming Monitor, HDR10, AMD FreeSync Premium -LC34G55TWWWXXL, Black, 3440 X 1440 (WQHD) Pixels"
            price={449}
            image="https://m.media-amazon.com/images/I/71it2biogSS._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
