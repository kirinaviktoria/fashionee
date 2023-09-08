import React, {  } from "react";
import Header from "./components/Header/Header";
import ShopPage from "./components/ShopPage/ShopPage";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer"; 

function App() {


  return (
      <div className="App">
        <Header />
        <div className="content"> 
          <ShopPage />
          <Products />
        </div>
        <Footer/>
      </div>

  );
}

export default App;