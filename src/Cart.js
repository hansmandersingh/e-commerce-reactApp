import React from "react";

export default function Cart(props) {
  return (
    <li className="cart-item">
      <div className="name">{props.item.name}</div>
      <button>X</button>
      <div className="price">@ ${props.item.price}</div>
    </li>
  );
}
