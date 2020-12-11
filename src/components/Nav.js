import React, { useEffect } from "react";
import {
    Navbar,
    Nav,
    Button,
    FormControl,
    Container,
    Row,
    Col,
    InputGroup,
    NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actionCreator from "../store/actions/actionCreators";
const Navx = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.add.value);
    useEffect(() => {
        dispatch(actionCreator.fetchProduct());
    }, [dispatch]);
    return (
        <>
            <header>
                <Navbar
                    bg="dark"
                    variant="dark"
                    className="justify-content-between"
                >
                    <Navbar.Brand>
                        <Link to={"/"}>MyShop</Link>
                    </Navbar.Brand>
                    <Container fluid>
                        <Row className="ml-3"></Row>
                        <Nav className="ml-3">
                            <Nav.Link href="/">Home</Nav.Link>

                            <NavDropdown
                                title="Category"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#ele">
                                    Electronics
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#jewl">
                                    Jewelery
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#men">
                                    Men clothing
                                </NavDropdown.Item>

                                <NavDropdown.Item href="#women">
                                    Women clothing
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Row className="justify-content-md-center">
                            <Col>
                                <InputGroup className="lg-8">
                                    <FormControl placeholder="Search products" />
                                    <br />
                                    <Button variant="outline-info">
                                        Search
                                    </Button>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className="mr-4">
                            <Col>
                                <Link
                                    to={"/cart"}
                                    className="fas fa-shopping-cart"
                                >
                                    {counter}
                                </Link>
                            </Col>

                            <Col>
                                <Link to="#">
                                    <i className="fas fa-user"></i>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default Navx;
