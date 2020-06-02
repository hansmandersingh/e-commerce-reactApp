import React from "react";
import "./App.css";
import Item from "./Item";
import Cart from "./Cart";

export default class App extends React.Component {
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
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, item],
    }));
  };

  render() {
    return (
      <>
        <header>
          <h1>mouseHeav3an</h1>
        </header>
        <main>
          <ul className="items">
            {this.state.allItems.map((item) => (
              <Item key={item.id} item={item} addToCart={this.addToCart} />
            ))}
          </ul>
          <aside className="cart">
            <h2>Your Cart</h2>
            <ul>
              {this.state.cartItems.map(item => (
                <Cart key={item.id} item={item}/>
              ))}
            </ul>
            <div className="total">Total: $309.97</div>
          </aside>
        </main>
      </>
    );
  }
}
