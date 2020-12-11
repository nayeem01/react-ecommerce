import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Card from "./Card";
import axios from "axios";

const api = axios.create({
    baseURL: `https://fakestoreapi.com/products`,
});

class products extends Component {
    _isMounted = false;

    state = {
        products: [],
    };

    componentDidMount() {
        this._isMounted = true;

        if (this._isMounted) {
            api.get("/").then((res) => {
                this.setState({ products: res.data });
            });
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        return (
            <div>
                <Container>
                    <h3 className="text-info">Electronics</h3>
                    <Row>
                        {this.state.products.map((x) => {
                            if (x.category === "electronics") {
                                return (
                                    <Card
                                        key={x.id}
                                        title={x.title}
                                        img={x.image}
                                        price={x.price}
                                        id={x.id}
                                    />
                                );
                            }
                            return null;
                        })}
                    </Row>
                    <h3 className="text-info">Jewelery</h3>
                    <Row>
                        {this.state.products.map((x) => {
                            if (x.category === "jewelery") {
                                return (
                                    <Card
                                        key={x.id}
                                        title={x.title}
                                        img={x.image}
                                        price={x.price}
                                        id={x.id}
                                    />
                                );
                            }
                            return null;
                        })}
                    </Row>
                    <h3 className="text-info">Men clothing</h3>
                    <Row>
                        {this.state.products.map((x) => {
                            if (x.category === "men clothing") {
                                return (
                                    <Card
                                        key={x.id}
                                        title={x.title}
                                        img={x.image}
                                        price={x.price}
                                        id={x.id}
                                    />
                                );
                            }
                            return null;
                        })}
                    </Row>
                    <h3 className="text-info">Women clothing</h3>
                    <Row>
                        {this.state.products.map((x) => {
                            if (x.category === "women clothing") {
                                return (
                                    <Card
                                        key={x.id}
                                        title={x.title}
                                        img={x.image}
                                        id={x.id}
                                        price={x.price}
                                    />
                                );
                            }
                            return null;
                        })}
                    </Row>
                </Container>
            </div>
        );
    }
}
export default products;
