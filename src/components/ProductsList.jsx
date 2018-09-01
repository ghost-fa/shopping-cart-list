import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../modules/actions';

const ProductsList = ({ products }) => (
  <ul>
    {products.map(product => (
      <li key={product.id}>
        {product.id} || {product.title} || {product.price}
      </li>
    ))}
  </ul>
);

const mapStoreProps = ({ products }) => ({
  products: Object.values(products)
});

const mapActionsProps = {
  addToCart: addToCart
};

export default connect(
  mapStoreProps,
  mapActionsProps
)(ProductsList);
