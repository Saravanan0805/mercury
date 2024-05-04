import "./App.css";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import MenuPage from "./pages/MenuPage";
import DrinksMenuPage from "./pages/DrinksMenuPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/drinks-menu" element={<DrinksMenuPage />} />
      </Routes>
    </div>
  );
}

export default App;
