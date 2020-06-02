import React from "react";

export default function Item(props) {
  return (
    <li className="item">
      <img src={props.item.imageURL} alt="img"/>
      <h2>{props.item.name}</h2>
      <div className="price">$159.99</div>
      <div className="description">
        {props.item.description}
      </div>
      <button onClick={() => {props.addToCart(props.item)}}>Add to Cart</button>
    </li>
  );
}
