export const addToCart = product => ({
  type: 'ADDTOCART',
  product
});

export const removeItem = product => ({
  type: 'REMOVEITEM',
  product
});
export const removeAllItem = product => ({
  type: 'REMOVEALLITEM',
  product
});
export const checkOut = () => ({
  type: 'CHECKOUT'
});
