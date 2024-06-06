import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./styles.css";
// import Homepage from "./pages/Homepage";
// import MenuPage from "./pages/MenuPage";
// import DrinksMenuPage from "./pages/DrinksMenuPage";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        {/* <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/drinks-menu" element={<DrinksMenuPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
