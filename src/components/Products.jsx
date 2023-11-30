import { useContext } from "react";
import { ProductContext } from "../context/Context.jsx";
import { useEffect, useState } from "react";
import "../assets/css/Products.css";

function Products() {
    const [products, setProducts] = useState([]);

    const { addToBasket } = useContext(ProductContext);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(res => setProducts(res.products));
    }, []);

    return (
        <div className="productContainer">
            {
                products && products.map(item =>
                    <div className="card" key={Math.random()}>
                        <img src={item.thumbnail} alt="products" className="productimage" />
                        <span className="productName">{item.title}</span>
                        <span className="price">{item.price} $</span>
                        <button className="addBtn" onClick={() => addToBasket(item)}>Add to Card</button>
                    </div>
                )}
        </div>
    )
}
export default Products
