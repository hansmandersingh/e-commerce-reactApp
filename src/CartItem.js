import React from 'react';

export default function CartItem(props) {
  return (
    <li className="cart-item">
      <div className="name">{props.item.name}</div>
      <button onClick={() => {props.removeFromCart(props.item)}}>X</button>
      <div className="price">@ ${props.item.price}</div>
    </li>
  )
}