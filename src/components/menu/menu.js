import "./menu.css"

const Menu = (props) => {

    const {updateType} = props;

    const handleClick = (event)=>{
        updateType(event.target.id);
    }

    return(
        <nav>
            <button onClick={handleClick} id="people">Personajes</button>
            <button onClick={handleClick} id="planets">Planetas</button>
            <button onClick={handleClick} id="starships">Naves</button>
        </nav>
    )
};

export default Menu;