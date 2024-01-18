import { useEffect, useState } from "react";
import '../css/Pokedex.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function PokemonCard({indice, pokemonName, imagem }) {

    const navigate = useNavigate();
   
    const [imgPokemon, setImgPokemon] = useState([]);

    useEffect(() => {

        const fetchDataImg = async () => {
            try {
                const resposta = await axios.get(imagem);
                setImgPokemon(resposta.data);
            } catch (error) {
                console.error('Erro ao buscar imagens da API:', error);
            }
        }
        if (imagem) {
            fetchDataImg();
        }

    }, [imagem]);

    const backgroundColor = determinaFundo(imgPokemon.types && imgPokemon.types[0] && imgPokemon.types[0].type && imgPokemon.types[0].type.name);
    
    const  pokemonClicado = () => {

        console.log()
        const pokemonInfo = {
            hp: imgPokemon.stats[0].base_stat,
            atk: imgPokemon.stats[1].base_stat,
            def: imgPokemon.stats[2].base_stat,
            spAtk: imgPokemon.stats[3].base_stat,
            spDef: imgPokemon.stats[4].base_stat,
            spd: imgPokemon.stats[5].base_stat,
            name: pokemonName,
            typeOne: imgPokemon.types[0].type.name,
            typeTwo: imgPokemon.types[1] ? imgPokemon.types[1].type.name : undefined,
            img: imgPokemon.sprites.front_default,
            backgroundColor : backgroundColor
        };

        navigate(`/InfoPokemon?name=${pokemonName}&info=${encodeURIComponent(JSON.stringify(pokemonInfo))}`);
    };

    return (

        <div className="cardPokemon" style={{ backgroundColor }} onClick={pokemonClicado}>
            <div id="nomePokemon">{indice+1} - {pokemonName.charAt(0).toUpperCase()  + pokemonName.slice(1)}</div>

            {imgPokemon.sprites && imgPokemon.sprites.other &&/* imgPokemon.sprites.other.dream_world &&*/ (
                <img src={imgPokemon.sprites.front_default} />
            )}
            
        </div>

    )
}


function determinaFundo(id) {

    switch (id) {
        case 'grass':
            return '#00ff00b4';
        case 'fire':
            return '#ff5e00b4';
        case 'water':
            return '#5bdeffe8';
        case 'poison':
            return '#7700ffc9';
        case 'bug':
            return '#008b07c9';
        case 'normal':
            return '#d3d3d3c9';
        case 'dark':
            return '#131212c9';
        case 'fairy':
            return '#cc00ffc9';
        case 'ghost':
            return '#600079c9';
        case 'ice':
            return '#00ffffc9';
        case 'flying':
            return '#7cffffc9';
        case 'fighting':
            return '#b30000c9';
        case 'electric':
            return '#fffb00c9';
        case 'ground':
            return '#5e3200c9';
        case 'psychic':
            return '#e93edbc9';
        case 'steel':
            return '#889599c9';
        case 'dragon':
            return '#1c04f7c9';
        case 'rock':
            return '#553000c9';
        default:
            return '#ffffffc9';

    }

}

export default PokemonCard;