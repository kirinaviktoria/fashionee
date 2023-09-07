import React, { useState, useReducer } from "react";
// import data from '../../products.json'
import Header from "./components/Header/Header";
import ShopPage from "./components/ShopPage/ShopPage";
import Products from "./components/Products/Products";
import {ProductsContext} from './context/ProductsContext'
// import { ACTIONS, reduser, initialState } from "./redusers/reducer";
import Footer from "./components/Footer/Footer"; 

function App() {

  // const [state, dispatch] = useReducer(reduser, initialState)

  // const [products, setProducts] = useState(data.products)
  const likedCards = []
  // let likedAmount = likedCards.length
  // const [liked, setLiked] = useState(0)


  return (
    <ProductsContext.Provider value={{
        likedCards
      }} >
      <div className="App">
        <Header likedAmount={likedCards.length}/>
        <div>likedAmount: {likedCards} </div>
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