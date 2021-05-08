import { ShoppingBasketRounded } from "@material-ui/icons";
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct.js";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <h2 className="checkout__title">Your Shopping Basket</h2>
                {basket.map((item) => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                    ></CheckoutProduct>
                ))}
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
