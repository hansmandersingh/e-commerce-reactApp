import React from "react";
import CartItem from "./CartItem";

export default function Cart(props) {
  let hidden;
  
  if (props.cartItems.length === 0) {
    hidden = "total hide";
  } else {
    hidden = "total";
  }

  return (
    <aside className="cart">
      <h2>Your Cart</h2>
      <ul>
        {props.cartItems.map((item) => (
          <CartItem key={item.cartItemsId} item={item} removeFromCart={props.removeFromCart}/>
        ))}
      </ul>
        <div className={hidden}>Total: ${(props.total).toFixed(2)}</div>
    </aside>
  );
}
