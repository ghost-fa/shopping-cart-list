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
      let newCart = { ...cart };
      delete newCart[id];
      return {
        cart:
          quantity > 1
            ? {
                ...cart,
                [id]: {
                  ...product,
                  quantity: quantity - 1
                }
              }
            : newCart,
        products: {
          ...products,
          [id]: {
            ...products[id],
            inventory: products[id].inventory + 1
          }
        }
      };
    case 'REMOVE_ALL_ITEM':
      return {
        products: {
          ...products,
          [id]: {
            ...products[id],
            inventory: products[id].inventory + quantity
          }
        },
        cart: newCart ? quantity : {}
      };
    case 'CHECKOUT':
      return {
        ...state,
        cart: {}
      };

    default:
      return state;
  }
};
