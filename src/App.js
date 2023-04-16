import React, { useEffect, useReducer } from "react";
import Header from "./components/FirstScreen/Header/Header";
import Content from "./components/FirstScreen/Content/Content";
import { ACTIONS, initialState, reduser } from "./redusers/reducer";
import data from './products.json'
import ProductsContext from "./context/ProductsContext";
import Products from "./components/Products/Products";

function App() {
  const [state, dispatch] = useReducer(reduser, initialState);

  useEffect(() => {
    fetch(data.products)
    .then(responce => responce.json())
    .then(json => dispatch({
      type: ACTIONS.SET_PRODUCTS,
      payload: { products: json }
    }))
  }, [dispatch])

  return (
    <ProductsContext.Provider value={{ dispatch, state }}> 
    <div className="App">
      <Header/>
      <Content/>
      <Products/>
    </div>
    {console.log(data.products.length)}
    </ProductsContext.Provider>
  );
}

export default App;