import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function card(props) {
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
                            <span class="badge badge-success mr-3">Price</span>${" "}
                            {Math.floor(props.price * 81)} BDT
                        </h4>
                        <Link to={`/product/${props.id}`}>
                            <Button variant="primary">View</Button>
                        </Link>

                        <Button className="ml-3" variant="info">
                            add to chart
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
}

export default card;
