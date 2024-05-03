import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />{" "}
      </Routes>{" "}
    </div>
  );
}

export default App;
