import React from 'react';
import './App.css';
import Item from './Item';

export default class App extends React.Component {
  state = {
    cart: [],
  }

  componentDidMount = () => {
    fetch(` https://5ed0108416017c00165e327c.mockapi.io/api/v1/items`)
      .then(data => data.json())
      .then(json => {
        this.setState({cart: json});
      })
  }

  render() {
    return (
      <>
        <header><h1>mouseHeav3an</h1></header>
          <main>
          <ul className="items">
            {this.state.cart.map(item => (
              <Item key={item.id} item={item}/>
            ))}
          </ul>
          </main>
      </>
    )
  }
}