import * as actionType from "../actions/actions";
const initialState = {
    value: 0,
    productId: [],
};

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.add:
            return {
                ...state,
                value: state.value + 1,
                productId: state.productId.concat(action.id),
            };
        case actionType.remove:
            return {
                ...state,
                value: state.value - 1,
            };
        default:
            return state;
    }
}
export default cartReducer;
