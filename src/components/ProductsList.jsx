import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../modules/actions';

const ProductsList = ({ products, addToCart }) => (
  <ul>
    {products.map(product => (
      <li key={product.id}>
        <p>
          {product.id} || {product.title} || {product.price}
        </p>
        <button className="btn btn-dark" onClick={() => addToCart(product)}>
          ADD TO CART
        </button>
      </li>
    ))}
  </ul>
);

const mapStoreToProps = ({ products }) => ({
  products: Object.values(products)
});

const mapActionsProps = {
  addToCart: addToCart
};

export default connect(
  mapStoreToProps,
  mapActionsProps
)(ProductsList);
