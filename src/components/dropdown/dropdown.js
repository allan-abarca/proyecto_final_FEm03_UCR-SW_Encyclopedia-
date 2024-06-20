import "./dropdown.css"
import { useEffect, useState } from "react";

const Dropdown = (props) => {

    const {type, updateCardValue} = props;

    const api_url = "https://swapi.dev/api/";

    const [items, setItems] = useState([]);

    // useEffect(()=>{
    //     fetchData(type)
    // },[]);

    useEffect(()=>{
        fetchData(type)
    },[type]);

    async function fetchData(endpoint){
        try {
            const response = await fetch(api_url + endpoint);
            if(!response.ok){
                throw new Error("Network response was not ok")
            }
            const data = await response.json();
            setItems(data.results)
    
        }catch (error){
            console.error("Error fetching data: ", error);
            return [];
        }
    }

    const handleChange = (event)=>{
        updateCardValue(event.target.value);
    }

    return(
        <select onChange={handleChange}>
            {items.map((item, index) => (
                <option key={index} value={item.url}>
                    {item.name || item.title}
                </option>
            ))}
        </select>
    )
};

export default Dropdown;