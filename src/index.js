import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/main.css';
import App from './App';
import products from './products.json';
import registerServiceWorker from './registerServiceWorker';
import { appReducer } from './modules/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// const appReducer = state => state;

const store = createStore(
  appReducer,
  {
    products: products.reduce(
      (products, product) => ({
        ...products,
        [product.id]: product
      }),
      {}
    ),
    cart: {}
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
