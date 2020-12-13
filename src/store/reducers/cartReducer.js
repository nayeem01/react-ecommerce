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
        case actionType.update:
            return {
                ...state,
                productId: action.list,
            };
        case actionType.remove:
            return {
                ...state,
                value: state.value - action.value,
                productId: state.productId.filter((x) => x != action.id),
            };
        case actionType.removeUpdate:
            return {
                ...state,
                value: state.value - action.value,
            };
        default:
            return state;
    }
}
export default cartReducer;
