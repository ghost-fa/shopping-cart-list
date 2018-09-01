import React from 'react';
import { connect } from 'react-redux';
import { removeItem, removeAllItem, checkOut } from '../modules/actions';

const ShoppingCart = ({ carts, removeItem, removeAllItem, checkOut }) => (
  <div>
    <ul>
      {carts.map(cart => (
        <li key={cart.id}>
          <p>
            {cart.title} || ${cart.price} || X{cart.quantity}
          </p>

          <button
            className="btn btn-dark mr-2"
            onClick={() => removeItem(cart)}
          >
            Remove One
          </button>
          <button
            className="btn btn-dark mr-2"
            onClick={() => removeAllItem(cart)}
          >
            Remove All
          </button>
        </li>
      ))}

      <p>
        total:${carts.reduce(
          (total, cart) =>
            parseFloat((total + cart.price * cart.quantity).toFixed(2)),
          0
        )}
      </p>
      <button className="btn btn-dark mr-2" onClick={() => checkOut(carts)}>
        CheckOut
      </button>
    </ul>
  </div>
);

const mapStoreProps = ({ cart }) => ({
  carts: Object.values(cart)
});
const mapActionsProps = {
  removeItem: removeItem,
  removeAllItem: removeAllItem,
  checkOut: checkOut
};

export default connect(
  mapStoreProps,
  mapActionsProps
)(ShoppingCart);
