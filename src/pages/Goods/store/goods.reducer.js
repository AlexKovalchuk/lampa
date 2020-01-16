import {INITIAL_STATE, GET_GOODS} from "./goods.constants";

export const goodsReducer = (state = INITIAL_STATE, action) => {
  const {type, payload} = action;

  switch(type){
    case GET_GOODS:
      return {...state, goodsList: payload};
    default: return state;
  }
};