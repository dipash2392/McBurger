import { combineReducers } from 'redux';


import cartReducers from './Cart/cart.reducer';


export default combineReducers({
    cartMenu : cartReducers,
    
})