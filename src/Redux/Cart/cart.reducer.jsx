import { cartActionTypes } from './cart.types';

const INITIAL_STATE = {
    myCartMenu: [],
    }

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.SET_MY_CART:
            return {
                ...state,
                myCartMenu: action.payload,
            }
        default:
            return state;
    }
}

export default cartReducer;