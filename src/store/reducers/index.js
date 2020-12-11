import cartReducer from "./cartReducer";
import cartInfo from "./cartInfo";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    add: cartReducer,
    data: cartInfo,
});

export default rootReducer;
