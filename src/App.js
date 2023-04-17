import React from "react";
import Header from "./components/FirstScreen/Header/Header";
import Content from "./components/FirstScreen/Content/Content";
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