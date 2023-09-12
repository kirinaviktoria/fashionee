import React, { useReducer } from "react";
// import data from '../../products.json'
import Header from "./components/Header/Header";
import ShopPage from "./components/ShopPage/ShopPage";
import Products from "./components/Products/Products";
import {ProductsContext} from './context/ProductsContext'
import { initialState, reduser } from "./redusers/reducer";
import Footer from "./components/Footer/Footer"; 

function App() {
  const [state, dispatch] = useReducer(reduser, initialState)

  // const [products, setProducts] = useState(data.products)
  // const [likedCards, setLikedCards] = useState(state.amountLiked.length)
  // let likedAmount = likedCards.length
  // const [liked, setLiked] = useState(0)


  return (
    <ProductsContext.Provider value={{state, dispatch}} >
      <div className="App">
        <Header likedAmount={state.amountLiked.length}/>
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