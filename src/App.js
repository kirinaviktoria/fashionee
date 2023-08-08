import React, { useReducer } from "react";
import Header from "./components/Header/Header";
import ShopPage from "./components/ShopPage/ShopPage";
import Products from "./components/Products/Products";
import {ProductsContext} from './context/ProductsContext'
import { ACTIONS, reduser, initialState } from "./redusers/reducer";

function App() {

  const [state, dispatch] = useReducer(reduser, initialState)

  return (
    <ProductsContext.Provider value={{ dispatch, state }}>
      <div className="App">
        <Header />
        <ShopPage />
        <Products />
      </div>
    </ProductsContext.Provider>

  );
}

export default App;