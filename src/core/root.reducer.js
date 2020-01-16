import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import {goodsReducer} from '../pages/Goods/store/goods.reducer';
import {cartReducer} from '../pages/Cart/store/cart.reducer'

export const rootReducer = combineReducers({
  form: formReducer,
  goods: goodsReducer,
  cart: cartReducer,
});
