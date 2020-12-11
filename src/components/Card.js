import React, { useEffect } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as actionType from "../store/actions/actions";
import { useDispatch } from "react-redux";
import * as actionCreator from "../store/actions/actionCreators";

function Cardx(props) {
    const dispatch = useDispatch();

    return (
        <div>
            <Col>
                <Card
                    className="card text-white bg-secondary mb-3"
                    style={{ width: "18rem" }}
                >
                    <Card.Img variant="top" src={props.img} height="350" />
                    <Card.Body>
                        <Card.Title>
                            {" "}
                            <Link
                                to={`/product/${props.id}`}
                                className="text-dark"
                            >
                                {props.title}
                            </Link>
                        </Card.Title>
                        <Card.Title></Card.Title>

                        <h4>
                            <span className="badge badge-success mr-3">
                                Price
                            </span>
                            $ {Math.floor(props.price * 81)} BDT
                        </h4>
                        <Link to={`/product/${props.id}`}>
                            <Button variant="primary">View</Button>
                        </Link>

                        <Button
                            onClick={() =>
                                dispatch({ type: actionType.add, id: props.id })
                            }
                            className="ml-3"
                            variant="info"
                        >
                            add to chart
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
}

export default Cardx;
