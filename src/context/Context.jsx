import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);
    const [Item, setItem] = useState([]);

    useEffect(() => {
        setProduct([...product, Item]);
    }, []);


    const addToBasket = (item) => setProducts([...products, item]);
    const ToBasket = (item) => setItem(prev => prev.concat(item));
    const RemoveBasket = (id) => setProduct(prev => prev.filter(item => item.id !== id));

    console.log('', product)
    const value = {
        products,
        addToBasket,
        setProducts,
        ToBasket,
        product,
        RemoveBasket
    }

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

ProductProvider.propTypes = {
    children: PropTypes.any
};

export default ProductProvider;
