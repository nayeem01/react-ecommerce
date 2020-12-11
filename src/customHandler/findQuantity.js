function findQuantity(arr) {
    let cart = (element, arr) => {
        let times = 0;
        for (let index = 0; index < arr.length; index++) {
            if (element === arr[index]) {
                times++;
            }
        }

        return times;
    };
    var productSet = [];
    productSet = Array.from(new Set(arr));
    var productList = {
        productid: [],
        times: [],
    };
    productSet.map((x) => {
        let times = cart(x, arr);
        // console.log(x, times);
        productList = {
            ...productList,
            productid: productList.productid.concat(x),
            times: productList.times.concat(times),
        };
        return null;
        //console.log(productList);
    });
    return productList;
}
export default findQuantity;
