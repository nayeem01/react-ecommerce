import React from "react";
import Nav from "./components/Nav";
import Products from "./components/products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/cart";
function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <br />
                <Route path="/cart" component={Cart} />
                <Switch>
                    <Route path="/" exact component={Products} />
                    <Route path="/product/:id" component={ProductDetail} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
