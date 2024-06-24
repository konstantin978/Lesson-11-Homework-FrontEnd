// components/BasketItem.js
import React, { useContext } from 'react';
import { ProductContext } from '../context';

export const BasketItem = ({ item }) => {
  const { dispatch } = useContext(ProductContext);

  const incrementCount = () => {
    dispatch({ type: 'INCREMENT_COUNT', payload: item });
  };

  const decrementCount = () => {
    dispatch({ type: 'DECREMENT_COUNT', payload: item });
  };

  const removeFromBasket = () => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: item });
  };

  return (
    <tr>
      <td>{item.title}</td>
      <td>${item.price * item.count}</td>
      <td>{item.count}</td>
      <td>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
        <button onClick={removeFromBasket}>Remove</button>
      </td>
    </tr>
  );
};