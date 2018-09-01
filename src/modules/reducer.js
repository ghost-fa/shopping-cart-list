export const appReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
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
