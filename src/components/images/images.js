import "./images.css"
import { useEffect, useState } from "react";

const Image = (props)=>{

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
            <div className="image-container">
                <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/01/Star-Wars-Skywalker-Saga-Cropped.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5" alt="Characters image"></img>
            </div>
        )
    };

    const Planet = (props)=>{

        const {planet} = props;

        return(
            <div className="image-container">
                <img src="https://reviewsyouread.wordpress.com/wp-content/uploads/2021/03/10-more-star-wars-planets-as-countries.png?w=1200" alt="Planets image"></img>
            </div>
        )
    };

    const Starship = (props)=>{

        const {starship} = props;

        return(
            <div className="image-container">
                <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/07/Star-Wars-Space-Battle-Header-Cropped.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5" alt="Starships image"></img>
            </div>
        )
    };

    const ImageTemplate = (props)=>{

        const {values} = props;

        if (menuType === "people" && items){
            console.log("PEOPLE")
            return <People character={values}/>
        }else if (menuType === "planets" && items){
            console.log("PLANET")
            return <Planet planet={values}/>
        }else if (menuType === "starships" && items){
            console.log("STARSHIP")
            return <Starship starship={values}/>
        } 
    }

    return(
        <ImageTemplate values={items}/>
    )
};

export default Image;