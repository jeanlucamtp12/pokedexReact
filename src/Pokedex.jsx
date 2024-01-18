import { useState } from "react";
import ListaPokemon from "./ListaPokemon";
import '../css/Pokedex.css';

function Pokedex() {
    return (
        <div>
            <div className="pokedex-container">
                <ListaPokemon />
            </div>
        </div>
    )
}

export default Pokedex;