import React from "react";
import "../css/style.css";
import ProductCard from "./ProductCard";
import useAxios from "axios-hooks";
import { Container } from "react-bootstrap";

function ProductDetail({ match }) {
    const [{ data, loading, error }] = useAxios(
        `https://fakestoreapi.com/products/${match.params.id}`
    );
    if (loading)
        return (
            <Container>
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </Container>
        );
    if (error) return <p>Error!</p>;

    return (
        <div>
            <ProductCard
                key={data.id}
                img={data.image}
                name={data.title}
                description={data.description}
                price={data.price}
                cat={data.category}
            />
        </div>
    );
}

export default ProductDetail;
