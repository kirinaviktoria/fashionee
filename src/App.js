import React, { useDebugValue, useReducer, useState } from "react";
import data from './products.json'
// import { FAVOURITES_KEY } from './components/constants/localStorage'
import Header from "./components/Header/Header";
import ShopPage from "./components/ShopPage/ShopPage";
import Products from "./components/Products/Products";
import {ProductsContext} from './context/ProductsContext'
import { initialState, reduser } from "./reducers/reducer";
import Footer from "./components/Footer/Footer"; 

function App() {
  // const { dataProducts } = data
  const [ dataProducts, setDataProducts ] = useState(data.products)

  const [state, dispatch] = useReducer(reduser, initialState)

  // useDebugValue(state.amountLiked)

  
  return (
    <ProductsContext.Provider value={{state, dispatch}} >
      <div className="App">
        <Header />
        <div className="content"> 
          <ShopPage />
          <Products dataProducts = { dataProducts } />
        </div>
        <Footer/>
      </div>
     </ProductsContext.Provider>
  );
}

export default App;