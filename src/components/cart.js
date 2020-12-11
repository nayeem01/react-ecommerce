import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import findQuantity from "../customHandler/findQuantity";
import * as actionCreator from "../store/actions/actionCreators";
import { Col, Table, Button, Row, Container } from "react-bootstrap";
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
    let qtyUpdate;
    useMemo(() => {
        dispatch(actionCreator.cart(result));
        dispatch(actionCreator.qty(qt));
    }, [qtyUpdate]);
    // let total = ;
    let cartList = useSelector((state) => state.data.cart);
    qtyUpdate = useSelector((state) => state.data.qty);

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
                        <tr>
                            <td>{x.id}</td>
                            <td>{x.title}</td>
                            <td>{x.price * 81} BDT</td>
                            <td>{qt[i]}</td>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    dispatch(
                                        actionCreator.cart(
                                            cartList.filter((y) => y.id != x.id)
                                        )
                                    );
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
            </Container>
        </div>
    );
}

export default Cart;
