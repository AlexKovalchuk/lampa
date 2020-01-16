import {
  INITIAL_STATE,
  PUT_ITEM_TO_CART,
  INCREASE_ITEM_COUNTER,
  REMOVE_ITEM_FROM_CART,
} from "./cart.constants";

export const cartReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;
  switch (type) {

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
      return {totalPrice: totalPriceIncreaseItemCount, cartData: IncreaseItemCountCartData};

    case PUT_ITEM_TO_CART:
      let totalPricePutItem = payload.item.price;
      const putItemCartData = state.cartData.map(item => {
        totalPricePutItem += item.price * item.count;
        return item
      });
      putItemCartData.push(payload.item);


      return {totalPrice: totalPricePutItem, cartData: putItemCartData};

    case REMOVE_ITEM_FROM_CART:
      let totalPriceRemoveItem = 0;
      const removeItemCartData = state.cartData.filter(item => {
        if(item.id !== payload.id) {
          totalPriceRemoveItem += item.price * item.count
          return item;
        }
      });
      return {totalPrice: totalPriceRemoveItem, cartData: removeItemCartData};
    default: return state;
  }
};