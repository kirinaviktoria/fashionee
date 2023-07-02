import React, { useReducer } from "react";
import Header from "./components/Header/Header";
import Content from "./components/ShopPage/Content/Content";
import Products from "./components/Products/Products";
import {ProductsContext} from './context/ProductsContext'
import { ACTIONS, reduser, initialState } from "./redusers/reducer";

function App() {

  const [state, dispatch] = useReducer(reduser, initialState)

  return (
    <ProductsContext.Provider value={{ dispatch, state }}>
      <div className="App">
        <Header />
        <Content />
        <Products />
      </div>
    </ProductsContext.Provider>

  );
}

export default App;