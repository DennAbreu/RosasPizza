import "./App.css";
import Header from "./components/Layout/Header";
import NavBar from "./components/Layout/NavBar";
import DisplayFood from "./components/Food/DisplayFood";
import FoodProvider from "./components/ctx/FoodProvider";

function App() {
  return (
    <FoodProvider>
      <div>
        <Header />
        <NavBar />
        <DisplayFood />
      </div>
    </FoodProvider>
  );
}

export default App;
