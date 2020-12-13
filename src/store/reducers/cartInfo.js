import * as actionType from "../actions/actions";

const initialState = {
    info: [],
    cart: [],
    qty: [],
};

function cartInfo(state = initialState, action) {
    switch (action.type) {
        case actionType.cart:
            return {
                ...state,
                cart: action.cart,
                qty: action.qty,
            };
        case actionType.cartUp:
            return {
                ...state,
                cart: action.cart,
                qty: action.qty,
            };
        case actionType.qty:
            return {
                ...state,
                qty: action.qty,
            };
        case actionType.qtyUp:
            return {
                ...state,
                qty: action.qty,
            };
        case actionType.fetchAll:
            return {
                ...state,
                info: state.info.concat(action.info),
            };
        default:
            return state;
    }
}
export default cartInfo;
