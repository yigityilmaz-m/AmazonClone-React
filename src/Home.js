import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
            </div>
            <div className="home__row">
                <Product
                    id="1"
                    title="Purina Cat Chow Hairball, Healthy Weight, Indoor Dry Cat
                    Food, Indoor - (4) 3.15 lb. Bags"
                    price={14.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/812aWw5mI-L._AC_SL1500_.jpg"
                    rating={3}
                />
                <Product
                    id="1"
                    title="HyperX Cloud II - Gaming Headset, 7.1 Surround Sound, Memory Foam Ear Pads, Durable Aluminum Frame, Detachable Microphone, Works with PC, PS4, Xbox One - Red"
                    price={99.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/61JJl260NlL._AC_SL1412_.jpg"
                    rating={4}
                />
            </div>
            <div className="home__row">
                <Product
                    id="1"
                    title="CamelBak Eddy+ BPA Free Water Bottle"
                    price={4.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/61lXNGI8jAL._AC_SL1500_.jpg"
                    rating={4}
                />
                <Product
                    id="1"
                    title="Snake Designer Ring"
                    price={4.99}
                    rating={5}
                    image="https://st3.myideasoft.com/idea/cv/28/myassets/products/427/image0-10.jpeg?revision=1618463525"
                />
                <Product
                    id="1"
                    title="Baby GUND My 1st Teddy Bear Stuffed Animal Plush, Tan 15"
                    price={14.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81K5NeCRI5L._SL1500_.jpg"
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product
                    id="1"
                    title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
                    price={999.0}
                    image="https://images-na.ssl-images-amazon.com/images/I/61SQz8S%2BfEL._AC_SL1000_.jpg"
                    rating={4}
                />
                
            </div>
        </div>
    );
}

export default Home;
