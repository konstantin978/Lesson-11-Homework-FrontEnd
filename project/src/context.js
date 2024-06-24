import React from "react";

export const ProductContext = React.createContext()

export const initialState = {
  products: [
    { id: 101, title: 'Psychology', price: 10.99, photo: 'https://images.booksense.com/images/568/458/9781465458568.jpg' },
    { id: 102, title: 'Sociology', price: 9.99, photo: 'https://m.media-amazon.com/images/I/81z-Pj9NxjL._AC_UF1000,1000_QL80_.jpg' },
    { id: 103, title: 'Biology', price: 12.99, photo: 'https://cdn.gramedia.com/uploads/items/THE_BIOLOGY_BOOK.jpg' },
    { id: 104, title: 'Philosophy', price: 11.99, photo: 'https://images.booksense.com/images/551/458/9781465458551.jpg' },
    { id: 105, title: 'Architecture', price: 14.99, photo: 'https://bookazine.com.hk/cdn/shop/products/The_Architecture_Book_Big_Ideas_Simply_Explained_9780241415030.jpg?v=1696484182' },
    { id: 106, title: 'Literature', price: 20.99, photo: 'https://images.booksense.com/images/889/429/9781465429889.jpg' },
    { id: 107, title: 'Mythology', price: 7.99, photo: 'https://cdn11.bigcommerce.com/s-aweq463/images/stencil/1280x1280/products/48563/122757/0241301912-01-_SCLZZZZZZZ_SX500___47100.1691656983.jpg?c=2' },
    { id: 108, title: 'Business', price: 35.99, photo: 'https://images.booksense.com/images/886/475/9781465475886.jpg' }
  ],
  basket: []
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      const existingItem = state.basket.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          basket: state.basket.map(item =>
            item.id === action.payload.id ? { ...item, count: item.count + 1 } : item
          )
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.payload, count: 1 }]
        };
      }
    case 'INCREMENT_COUNT':
      return {
        ...state,
        basket: state.basket.map(item =>
          item.id === action.payload.id ? { ...item, count: item.count + 1 } : item
        )
      };
    case 'DECREMENT_COUNT':
      return {
        ...state,
        basket: state.basket.map(item =>
          item.id === action.payload.id && item.count > 1 ? { ...item, count: item.count - 1 } : item
        )
      };
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        basket: state.basket.filter(item => item.id !== action.payload.id)
      };
    default:
      return state;
  }
};