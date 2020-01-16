import {
  PUT_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  INCREASE_ITEM_COUNTER,
} from './cart.constants'

export const addItemToCard = item => {
  return dispatch => {
    dispatch({
      type: PUT_ITEM_TO_CART,
      payload: {
        item: {...item, count: 1}
      }
    })
  }
};

export const increaseItemCounter = (id, newCount) => {
  return dispatch => {
    dispatch({
      type: INCREASE_ITEM_COUNTER,
      payload: {id, newCount},
    })
  };
};

export const removeItemFromCart = id => {
  return dispatch => {
    dispatch({
      type: REMOVE_ITEM_FROM_CART,
      payload: {id},
    });
  };
};