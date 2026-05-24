import { useState } from "react";
import ListaPokemon from "./ListaPokemon";
import '../css/Pokedex.css';

function Pokedex() {
    return (
        <div className="pokedex-container">
            <ListaPokemon />
        </div>
    )
}
export default Pokedex;