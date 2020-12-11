import * as actionType from "./actions";
import axios from "axios";

export const cart = (data) => {
    return {
        type: actionType.cart,
        cart: data,
    };
};
export const qty = (data) => {
    return {
        type: actionType.qty,
        qty: data,
    };
};
export const qtyRemove = (arr, index) => {
    arr = arr.splice(index, 0);
    return {
        type: actionType.qty,
        qty: arr,
    };
};

export const fetchProduct = () => async (dispatch) => {
    const { data } = await axios.get("https://fakestoreapi.com/products/");

    dispatch({
        type: actionType.fetchAll,
        info: data,
    });
};
