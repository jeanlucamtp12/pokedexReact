import Pokedex from "./Pokedex.jsx";
import '../css/Pokedex.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoPokemon from "./InfoPokemon.jsx";

function App() {
  return (
    <div className="pokedexCorpo">
      <img id="logo" src="../assets/logo.png" />

      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Pokedex />} />
                    <Route path="/InfoPokemon" element={<InfoPokemon />} />
                </Routes>
            </BrowserRouter>
    </div>

  )
}

export default App;
