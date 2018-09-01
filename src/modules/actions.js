export const addToCart = product => ({
  type: 'ADD_TO_CART',
  product
});

export const removeItem = product => ({
  type: 'REMOVE_ITEM',
  product
});
export const removeAllItem = product => ({
  type: 'REMOVE_ALL_ITEM',
  product
});
export const checkOut = () => ({
  type: 'CHECKOUT'
});
