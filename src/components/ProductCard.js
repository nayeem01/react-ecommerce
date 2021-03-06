import React from "react";
import {
    Row,
    Col,
    Image,
    ListGroup,
    Card,
    Button,
    ListGroupItem,
    Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Review from "./Review";
import { useDispatch } from "react-redux";
import * as actionType from "../store/actions/actions";
function ProductCard(props) {
    const dispatch = useDispatch();

    return (
        <div>
            <Col className="ml-3">
                <Link className="btn btn-dark my-3" to="/">
                    Go back
                </Link>
            </Col>

            <Container>
                <Row>
                    <Col md={6}>
                        <Image src={props.img} alt="name" width="400" fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroupItem>
                                <h3>{props.name}</h3>
                            </ListGroupItem>

                            <ListGroupItem>{props.description}</ListGroupItem>
                            <ListGroupItem>
                                Review: <Review value={Math.random() * 5} />
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col md={3} varient="flush">
                        <Card>
                            <ListGroupItem>
                                <Row>
                                    <Col>Price: </Col>
                                    <Col>
                                        <strong>
                                            $ {Math.floor(props.price * 80)} BDT
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>In stock</Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>
                                        <label className="form-control-label">
                                            Quentity:
                                        </label>
                                    </Col>

                                    <Col>
                                        <input
                                            type="text"
                                            placeholder="1"
                                            className="form-control is-valid"
                                            id="inputValid"
                                        />
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Button
                                    onClick={() =>
                                        dispatch({
                                            type: actionType.add,
                                            id: props.id,
                                        })
                                    }
                                    className="btn-block"
                                >
                                    Add to Cart
                                </Button>
                            </ListGroupItem>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProductCard;
