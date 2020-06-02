import React from "react";
import CartItem from "./CartItem";

export default function Cart(props) {
  return (
    <aside className="cart">
      <h2>Your Cart</h2>
      <ul>
        {props.cartItems.map((item) => (
          <CartItem key={item.cartItemsId} item={item} removeFromCart={props.removeFromCart}/>
        ))}
      </ul>
      <div className="total">Total: $309.97</div>
    </aside>
  );
}
