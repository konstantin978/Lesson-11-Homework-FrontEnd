import { useReducer } from 'react'
import { Basket } from './components/Basket'
import { ProductList } from './components/ProductList'
import { ProductContext, initialState, reducer } from './context.js';
import './App.css'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      <div className="row">
        <ProductList items={state.products} />
        <div className="row2">
          <Basket items={state.basket} />
        </div>
      </div>
    </ProductContext.Provider>
  );
}

export default App
