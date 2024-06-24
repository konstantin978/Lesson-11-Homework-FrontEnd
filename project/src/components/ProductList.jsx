import React, { useContext } from 'react';
import { ProductItem } from './ProductItem';

export const ProductList = ({ items }) => {
  return (
    <div className="product-list">
      {items.map(item => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
};