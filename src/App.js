import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/ShopPage/Content/Content";
import Products from "./components/Products/Products";

function App() {

  return (
    <div className="App">
      <Header/>
      <Content/>
      <Products/>
    </div>
  );
}

export default App;