export const appReducer = (state = {}, action) => {
  const { products, cart } = state;
  const { product } = action;
  const { id, title, price } = product || {};

  switch (action.type) {
    case 'ADD_TO_CART':
      const inventory = product.inventory;
      return {
        ...state,
        products: {
          ...products,
          [id]: {
            ...product,
            inventory: inventory - 1
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
