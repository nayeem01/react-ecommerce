import React from "react";
import { Component } from "react";
import Nav from "./components/nav";
import Products from "./components/products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/cart";
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Nav />
                    <br />
                    <Switch>
                        <Route path="/" exact component={Products} />
                        <Route path="/product/cart" component={Cart} />
                        <Route path="/product/:id" component={ProductDetail} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
