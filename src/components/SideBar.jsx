import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/Context.jsx";
import "../assets/css/SideBar.css";

function SideBar() {
    const { products, setProducts, ToBasket, product, RemoveBasket } = useContext(ProductContext);
    const [total, setTotal] = useState(0);
    let itemtotal = 0;

    products && products.forEach(item => {
        itemtotal += item.price
    })

    useEffect(() => { setTotal(itemtotal); }, [itemtotal]);

    const clear = () => setProducts([]);

    return (
        <div className="sideBarContainer">
            <h1 className="name">Card</h1>
            {
                products && products.map(item =>
                    <div className="addedProducts" key={Math.random()}>
                        <img src={item.thumbnail} alt="icon" className="thumbnail" />
                        <div className="desc">
                            <div className="productname">{item.title}</div>
                            <div className="price">{item.price} $</div>
                        </div>
                        <div className="btnGroups">
                            <button className="minus" onClick={() => RemoveBasket(item.id)}>-</button>
                            <div className="count" >{product.length}</div>
                            <button className="minus" onClick={() => ToBasket(item)}>+</button>
                        </div>
                    </div>
                )
            }
            <div className="btnGroup">
                <div className="totalPrice">{total}$</div>
                <button className="closeBtn" onClick={clear}>clear</button>
            </div>
        </div>
    )
}
export default SideBar
