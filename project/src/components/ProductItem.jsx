import React, { useContext } from 'react';
import { ProductContext } from '../context';

export const ProductItem = ({ item }) => {
    const { dispatch } = useContext(ProductContext);

    const addToBasket = () => {
        dispatch({ type: 'ADD_TO_BASKET', payload: item });
    };

    return (
        <div className="product-item">
            <h3>Name: {item.title}</h3>
            <p>Price: ${item.price}</p>
            <img src={item.photo} />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
};