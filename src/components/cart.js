import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import findQuantity from "../customHandler/findQuantity";
import * as actionCreator from "../store/actions/actionCreators";
import * as actionType from "../store/actions/actions";
import { Col, Table, Button, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import PriceCount from "../customHandler/PriceCount";
function Cart() {
    const dispatch = useDispatch();
    let productList = useSelector((state) => state.add.productId);
    const info = useSelector((state) => state.data.info);
    const qt = findQuantity(productList).times;
    productList = Array.from(new Set(productList));

    var result = [];
    productList.map((id, i) => {
        result = result.concat(info.filter((x) => x.id == productList[i]));
    });
    let qtyUpdate, cartList;

    useEffect(() => {
        dispatch(actionCreator.cart(result, qt));
        dispatch({
            type: actionType.update,
            list: productList,
        });

        // dispatch(actionCreator.qty(qt));
    }, [qtyUpdate]);
    // let total = ;
    cartList = useSelector((state) => state.data.cart);
    qtyUpdate = useSelector((state) => state.data.qty);
    // console.log(qtyUpdate.reduce((x, y) => x + y, 0));

    return (
        <div>
            <h3> Product List </h3>

            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cartList.map((x, i) => (
                        <tr key={x.id}>
                            <td>{x.id}</td>

                            <td>
                                <img src={x.image} width="50" height="40" />{" "}
                                {x.title}
                            </td>
                            <td>{x.price * 81} BDT</td>
                            <td>{qtyUpdate[i]}</td>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    dispatch(
                                        actionCreator.qtyUp(i, [...qtyUpdate])
                                    );
                                    dispatch({
                                        type: actionType.removeUpdate,
                                        value: 1,
                                    });
                                }}
                                className="far fa-minus-square btn-sm"
                            ></Button>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    dispatch(
                                        actionCreator.cartUp(
                                            cartList,
                                            x.id,
                                            qtyUpdate,
                                            i
                                        )
                                    );
                                    dispatch({
                                        type: actionType.remove,
                                        value: qtyUpdate[i],
                                        id: x.id,
                                    });
                                }}
                                className="fas fa-trash-alt ml-3 btn-sm"
                            ></Button>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Container>
                <Row>
                    <Col>
                        <h4> Total Price</h4>
                    </Col>
                    <Col xs={{ offset: 6 }}>
                        <h4>= {PriceCount()}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link
                            xs={{ span: 6, offset: 3 }}
                            to="/"
                            className="btn btn-primary btn-lg"
                        >
                            Continue Shopping
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Cart;
