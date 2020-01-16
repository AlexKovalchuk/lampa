import {
  INITIAL_STATE,
  PUT_ITEM_TO_CART,
  INCREASE_ITEM_COUNTER,
  REMOVE_ITEM_FROM_CART,
  INIT_CART_FROM_LS
} from "./cart.constants";

import {saveCartToLocalStorage} from './cart.helpers';

export const cartReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  let newState = null;
  switch (type) {

    case INIT_CART_FROM_LS:
      return action.payload;

    case INCREASE_ITEM_COUNTER:
      const {id, newCount} = payload;
      let totalPriceIncreaseItemCount = 0;
      const IncreaseItemCountCartData = state.cartData.map(item => {
        if(item.id === id) {
          totalPriceIncreaseItemCount += item.price * newCount;
          return {...item, count: newCount}
        } else {
          totalPriceIncreaseItemCount += item.price * item.count;
          return item;
        }
      });
      newState = {totalPrice: totalPriceIncreaseItemCount, cartData: IncreaseItemCountCartData};
      saveCartToLocalStorage(newState);
      return newState;

    case PUT_ITEM_TO_CART:
      let totalPricePutItem = payload.item.price;
      const putItemCartData = state.cartData.map(item => {
        totalPricePutItem += item.price * item.count;
        return item
      });
      putItemCartData.push(payload.item);
      newState = {totalPrice: totalPricePutItem, cartData: putItemCartData};
      saveCartToLocalStorage(newState);
      return newState;

    case REMOVE_ITEM_FROM_CART:
      let totalPriceRemoveItem = 0;
      const removeItemCartData = state.cartData.filter(item => {
        if(item.id !== payload.id) {
          totalPriceRemoveItem += item.price * item.count
          return item;
        }
      });
      newState = {totalPrice: totalPriceRemoveItem, cartData: removeItemCartData};
      saveCartToLocalStorage(newState);
      return newState;
    default: return state;
  }
};