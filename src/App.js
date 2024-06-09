import Navbar from "./shared/Navbar";
import { Outlet } from "react-router-dom";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Navbar className />
      <Outlet />
    </div>
  );
}

export default App;
