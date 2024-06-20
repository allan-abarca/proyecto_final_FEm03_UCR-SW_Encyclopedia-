import { useEffect, useState } from "react";

const Card = (props)=>{

    const {cardValue, menuType} = props;

    const [items, setItems] = useState(null);

    useEffect(()=>{
        fetchData(cardValue);
    },[cardValue])

    useEffect(()=>{
        console.log(items)
    }, [items])

    async function fetchData(url){
        try {
            const response = await fetch(url);
           
            const data = await response.json();
            // return data.results;
            setItems(data)
    
        }catch (error){
            // console.error("Error fetching data: ", error);
            // return [];
        }
    }

    const People = (props)=>{

        const {character} = props;

        return(
            <div>
                <h2>{character.name}</h2>
                <p>Altura: {character.height} cm</p>
                <p>Peso: {character.mass} kg</p>
                <p>Año de nacimiento: {character.birth_year}</p>
                <p>Género: {character.gender}</p>
            </div>
        )
    };

    const Planet = (props)=>{

        const {planet} = props;

        return(
            <div>
                <h2>{planet.name}</h2>
                <p>Clima: {planet.climate}</p>
                <p>Diámetro: {planet.diameter}</p>
                <p>Periodo orbital: {planet.orbital_period}</p>
                <p>Población: {planet.population}</p>
                <p>Terreno: {planet.terrain}</p>
            </div>
        )
    };

    const Starship = (props)=>{

        const {starship} = props;

        return(
            <div>
                <h2>{starship.name}</h2>
                <p>Pasajeros: {starship.passengers} seres</p>
                <p>Tripulación: {starship.crew} seres</p>
                <p>Cpacidad de carga: {starship.cargo_capacity}</p>
                <p>Clase de la nave: {starship.starship_class}</p>
                <p>Costo en créditos: {starship.cost_in_credits}</p>
                <p>Longitud: {starship.length}</p>
                <p>Modelo: {starship.model}</p>
                <p>Clasificación de hipervelocidad: {starship.hyperdrive_rating}</p>
            </div>
        )
    };

    const CardTemplate = (props)=>{

        const {values} = props;

        if (menuType === "people"){
            console.log("PEOPLE")
            return <People character={values}/>
        }else if (menuType === "planets"){
            console.log("PLANET")
            return <Planet planet={values}/>
        }else if (menuType === "starships"){
            console.log("STARSHIP")
            return <Starship starship={values}/>
        } 
    }

    return(
        <CardTemplate values={items}/>
    )
};

export default Card;