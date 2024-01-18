import { useEffect, useState , useRef} from "react";
import PokemonCard from './PokemonCard.jsx'
import '../css/Pokedex.css';
import axios from "axios";

function ListaPokemon({ pokemonClicado }) {
    const botaoRef = useRef(null);

  useEffect(() => {
    botaoRef.current.focus();
  }, []);

    const [inicioGeracao, setInicioGeracao] = useState(0);
    const [fimGeracao, setFimGeracao] = useState(151);

    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const resposta = axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${inicioGeracao}&limit=${fimGeracao}`);
                setPokemonData((await resposta).data.results);

            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData();
    }, [inicioGeracao, fimGeracao]);

    //const imagem = './src/assets/bulbassaur.png'

    return (
        <div>
            <div className="menuGeracao">
                <h1 id="textoSelecao">Selecione a Geração!</h1>
                <button ref={botaoRef} className="botaoGen" onClick={() => { setInicioGeracao(0); setFimGeracao(151) }}>I</button>
                <button className="botaoGen" onClick={() => { setInicioGeracao(151); setFimGeracao(100) }}>II</button>
                <button className="botaoGen" onClick={() => { setInicioGeracao(251); setFimGeracao(135) }}>III</button>
                <button className="botaoGen" onClick={() => { setInicioGeracao(386); setFimGeracao(107) }}>IV</button>
                <button className="botaoGen" onClick={() => { setInicioGeracao(493); setFimGeracao(156) }}>V</button>
                <button className="botaoGen" onClick={() => { setInicioGeracao(649); setFimGeracao(72) }}>VI</button>
                <button className="botaoGen" onClick={() => { setInicioGeracao(721); setFimGeracao(88) }}>VII</button>
                <button className="botaoGen" onClick={() => { setInicioGeracao(809); setFimGeracao(96) }}>VIII</button>
                <button className="botaoGen" onClick={() => { setInicioGeracao(905); setFimGeracao(120) }}>IX</button>
            </div>


            <div className="listaPokemon">
                {pokemonData.map((pokemon, index) => (
                    <PokemonCard key={pokemon.name} indice={index} pokemonName={pokemon.name} imagem={pokemon.url} />
                ))}
            </div> </div>
    )

}

export default ListaPokemon;
