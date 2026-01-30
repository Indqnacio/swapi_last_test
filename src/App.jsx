import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Films from "./pages/film";
import SideNav from "./components/sideNav/sidenav";
import NavBar from "./components/sideNav/navBar";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideNav />
        <div className="principal_div" style={{display:"flex"}}>
          <div className="bars_menus">
            <NavBar />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Films />} />
              <Route path="/films" element={<Films />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
