import React from "react";
import { Button, Container, Table } from "react-bootstrap";

function Cart() {
    return (
        <div>
            <h3> Product List </h3>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Add/Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <Container>
                                <Button className="mr-3 ">
                                    <i className="fas fa-cart-plus"></i>
                                </Button>
                                <Button className="mr-3 ">
                                    <i className="fas fa-minus"></i>
                                </Button>
                                <Button className="far fa-trash-alt"> </Button>
                            </Container>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Cart;
