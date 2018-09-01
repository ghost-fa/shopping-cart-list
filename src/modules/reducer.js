export const appReducer = (state = {}, action) => {
  const { products, cart } = state;
  const { product } = action;
  const { id, title, price } = product || {};
  const cartItem = cart[id] || { ...product, quantity: 0 };
  const quantity = cartItem.quantity;

  switch (action.type) {
    case 'ADD_TO_CART':
      const inventory = product.inventory;
      if (inventory <= 0) return state;
      return {
        ...state,
        products: {
          ...products,
          [id]: {
            ...product,
            inventory: inventory - 1
          }
        },
        cart: {
          ...cart,
          [id]: {
            id,
            title,
            price,
            quantity: quantity + 1
          }
        }
      };
    case 'REMOVE_ITEM':

    case 'REMOVE_ALL_ITEM':
    case 'CHECKOUT':
      break;

      break;

      break;
      break;
    default:
      return state;
  }
};
