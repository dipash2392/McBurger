import { cartActionTypes } from './cart.types';
export const myCartMenu = cartMenu => ({
    type: cartActionTypes.SET_MY_CART,
    payload: cartMenu
})