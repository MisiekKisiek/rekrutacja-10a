import { combineReducers } from 'redux';
import cart from './cart';
import products from './products';
import general from './general';
import cartVisibility from './cartVisibility';

export default combineReducers({
  cart,
  products,
  general,
  cartVisibility,
})
