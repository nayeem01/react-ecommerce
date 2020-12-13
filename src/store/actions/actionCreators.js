import * as actionType from "./actions";
import axios from "axios";

export const cart = (data, qty) => {
    return {
        type: actionType.cart,
        cart: data,
        qty: qty,
    };
};

export const cartUp = (data, id, qty, i) => {
    let dataUp = data.filter((y) => y.id != id);
    //   let index = data.list.indexOf(id);
    let qtyUp = qty.filter((m, n) => n != i);

    return {
        type: actionType.cartUp,
        cart: dataUp,
        qty: qtyUp,
    };
};
export const qtyUp = (i, arr) => {
    let newArr = [...arr];
    newArr[i] = newArr[i] - 1;
    // qty[i] = qty[i] - 1;
    //  console.log(i);
    return {
        type: actionType.qty,
        qty: newArr,
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
