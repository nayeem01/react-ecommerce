import { useSelector } from "react-redux";

function PriceCount() {
    const qty = useSelector((state) => state.data.qty);
    const cart = useSelector((state) => state.data.cart);
    let priceUpdate = 0;
    // console.log(cart[0]);

    cart.map((x, i) => {
        priceUpdate = priceUpdate + x.price * qty[i];
    });
    return priceUpdate * 81;
}
export default PriceCount;
