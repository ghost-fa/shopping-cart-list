import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../modules/actions';

const PrductList = ({ products, addToCart }) => (
  <ul>
    {products.map(product => (
      <li key={product.id}>
        <p>
          {product.title} || ${product.price} || X{product.inventory}
        </p>
        <button
          className="btn btn-dark mb-2"
          onClick={() => addToCart(product)}
          disabled={item.inventory > 0 ? 'Add To Cart' : 'Sold Out'}
        >
          Add To Cart
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
