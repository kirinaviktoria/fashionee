import React, { useReducer } from "react";
import Header from "./components/Header/Header";
import ShopPage from "./components/ShopPage/ShopPage";
import Products from "./components/Products/Products";
import {ProductsContext} from './context/ProductsContext'
// import { ACTIONS, reduser, initialState } from "./redusers/reducer";
import Footer from "./components/Footer/Footer"; 

function App() {

  // const [state, dispatch] = useReducer(reduser, initialState)

  return (
    <ProductsContext.Provider >
      <div className="App">
        <Header />
        <div className="content"> 
          <ShopPage />
          <Products />
        </div>
        <Footer/>
      </div>
    </ProductsContext.Provider>

  );
}

export default App;