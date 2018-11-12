import React, { Component } from 'react';

import './App.css';
import ShoppingCart from './components/shoppingCart';
import ProductList from './components/productList';

class App extends Component {
  render() {
    return (
      <div className="App">



        <ProductList />
        <ShoppingCart />
      </div>
    );
  }
}

export default App;
