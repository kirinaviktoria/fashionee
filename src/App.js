import React, { useState, useReducer, useEffect } from "react";
// import data from '../../products.json'
import Header from "./components/Header/Header";
import ShopPage from "./components/ShopPage/ShopPage";
import Products from "./components/Products/Products";
import {ProductsContext} from './context/ProductsContext'
import { ACTIONS, reduser } from "./redusers/reducer";
import Footer from "./components/Footer/Footer"; 

function App() {

  // const [state, dispatch] = useReducer(reduser, [])

  // const [products, setProducts] = useState(data.products)
  const likedCards = []
  // let likedAmount = likedCards.length
  // const [liked, setLiked] = useState(0)

  // useEffect(() => {
  //   localStorage.setItem('favourite', JSON.stringify(state))
  // }, [state])


  return (
    <ProductsContext.Provider value={{state, dispatch}} >
      <div className="App">
        <Header likedAmount={state.length}/>
        <div>likedAmount: {state} </div>
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