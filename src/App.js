import "./App.css";
import React, { useState } from "react";
import Header from "./components/Layout/Header";
import NavBar from "./components/Layout/NavBar";
import DisplayFood from "./components/Food/DisplayFood";
import FoodProvider from "./components/ctx/FoodProvider";
import Footer from "./components/Layout/Footer";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartModalShowing, setCartModalShowing] = useState(false);

  const showCartHandler = () => {
    setCartModalShowing(true);
  };

  const hideCartHandler = () => {
    setCartModalShowing(false);
  };

  return (
    <FoodProvider>
      {cartModalShowing && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <NavBar />
      <DisplayFood />
      <Footer />
    </FoodProvider>
  );
}

export default App;
