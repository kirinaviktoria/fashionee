import React, { useState, useReducer, useEffect } from "react";
// import data from '../../products.json'
import Header from "./components/Header/Header";
import ShopPage from "./components/ShopPage/ShopPage";
import Products from "./components/Products/Products";
import {ProductsContext} from './context/ProductsContext'
import { ACTIONS, initialState, reduser } from "./redusers/reducer";
import Footer from "./components/Footer/Footer"; 

function App() {

  const [state, dispatch] = useReducer(reduser, initialState)

  // const [products, setProducts] = useState(data.products)
  const [likedCards, setLikedCards] = useState(state.amountLiked.length)
  // let likedAmount = likedCards.length
  // const [liked, setLiked] = useState(0)

  // useEffect(() => {
  //   // localStorage.setItem('favourite', JSON.stringify(state))

  //   localStorage.getItem('favourite') ? dispatch({type: ACTIONS.LIKE_PRODUCTS})
  // }, [dispatch])


  return (
    <ProductsContext.Provider value={{state, dispatch}} >
      <div className="App">
        <Header likedAmount={state.amountLiked.length}/>
        <div>amountLiked: {state.amountLiked.length} </div>
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