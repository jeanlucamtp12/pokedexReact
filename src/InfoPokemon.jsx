import {useNavigate, useSearchParams, useParams } from 'react-router-dom';

function InfoPokemon() {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const info = searchParams.get('info');
    const decodeInfo = JSON.parse(decodeURIComponent(info));

    const { atk, def, hp, img, name, spAtk, spDef, spd, typeOne, typeTwo, backgroundColor } = decodeInfo;

    const  voltarMenu = () => {
        navigate("/");
    };

    return (
        <div className='cardInfo' style={{backgroundColor }}>
            <img id="botaoVoltar" src='./src/assets/voltar.png' onClick={voltarMenu}/>
            <div>
                <h1 id="nomeInfo">{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
                <img src={img} />
            </div>

            <div>
                <h1 id="tipo">Tipo: {typeOne.charAt(0).toUpperCase() + typeOne.slice(1)} {typeTwo ? typeTwo.charAt(0).toUpperCase() + typeTwo.slice(1) : undefined}</h1>
                <h1>Hp: {hp}</h1>
                <h1>Atk:{atk}</h1>
                <h1>Def: {def}</h1>
                <h1>Sp. Atk: {spAtk}</h1>
                <h1>Sp. Def: {spDef}</h1>
                <h1>Speed: {spd}</h1>
            </div>

        </div>
    )
}

export default InfoPokemon;