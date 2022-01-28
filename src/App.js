import "./App.css";
import Header from "./components/Layout/Header";
import NavBar from "./components/Layout/NavBar";
import DisplayFood from "./components/Food/DisplayFood";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <DisplayFood />
    </div>
  );
}

export default App;
