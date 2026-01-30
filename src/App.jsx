import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Films from "./pages/film";
import SideNav from "./components/sideNav/sidenav";
import NavBar from "./components/navBar";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="bars_menus">
        <SideNav />
        <div className="body_container">
          <NavBar />
          <Routes>
            <Route path="/" element={<Films />} />
            <Route path="/films" element={<Films />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
