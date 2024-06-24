import React, { useContext } from 'react';
import { BasketItem } from './BasketItem';
import { ProductContext } from '../context';

export const Basket = () => {
  const { state } = useContext(ProductContext);

  const total = state.basket.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className="basket">
      <h2>Basket</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.basket.map(item => (
            <BasketItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      <h3>Total: ${total}</h3>
    </div>
  );
};

