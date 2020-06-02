import React from "react";
import "./App.css";
import Item from "./Item";
import Cart from "./Cart";

export default class App extends React.Component {
  cartItemsId = 0;

  state = {
    allItems: [],
    cartItems: [],
  };

  componentDidMount = () => {
    fetch(` https://5ed0108416017c00165e327c.mockapi.io/api/v1/items`)
      .then((data) => data.json())
      .then((json) => {
        this.setState({ allItems: json });
      });
  };

  addToCart = (item) => {
    this.cartItemsId++;

    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, {...item, cartItemsId: this.cartItemsId}],
    }));
  };

  removeFromCart = (item) => {
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems].filter(fillItem => item.cartItemsId !== fillItem.cartItemsId)
    }))
  }

  render() {
    return (
      <>
        <header>
          <h1>mouseHeav3an</h1>
        </header>
        <main>
          <ul className="items">
            {this.state.allItems.map((item) => (
              <Item key={item.id} item={item} addToCart={this.addToCart}/>
            ))}
          </ul>
          <Cart cartItems={this.state.cartItems} cartItemsId={this.cartItemsId} removeFromCart={this.removeFromCart}/>
        </main>
      </>
    );
  }
}
