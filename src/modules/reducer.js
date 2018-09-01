export const appReducer = (state = {}, action) => {
  const { products, cart } = state;
  const { product } = action;
  const { id, title, price } = product || {};
  const cartItem = cart[id] || { ...product, quantity: 0 };

  switch (action.type) {
    case 'ADDTOCART':
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

    default:
      state;
  }
};
