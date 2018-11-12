import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../modules/actions';

const PrductList = ({ products, addToCart }) => (
  <ul className="product">
    {products.map(product => (
      <li key={product.id}>
        <p className="mt-2">
          {product.title} || ${product.price} || X{product.inventory}
        </p>
        <button
          className="btn btn-dark mb-2"
          onClick={() => addToCart(product)}
          disabled={product.inventory > 0 ? '' : 'disabled'}
        >
          {product.inventory > 0 ? 'Add To Cart' : 'Sold Out'}
        </button>
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
)(PrductList);
