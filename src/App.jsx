import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Films from "./pages/film";
import SideNav from "./components/sideNav/sidenav";
import NavBar from "./components/sideNav/navBar";
import Characters from "./pages/character";
import Planets from "./pages/planets";
import Starship from "./pages/starship";
import Vehicle from "./pages/vehicles";
import Specie from "./pages/specie";

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
              <Route path="/characters" element={<Characters />} />
              <Route path="/planets" element={<Planets />} />
              <Route path="/starships" element={<Starship />} />
              <Route path="/vehicles" element={<Vehicle />} />
              <Route path="/species" element={<Specie />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
