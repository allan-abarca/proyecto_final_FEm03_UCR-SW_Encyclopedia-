import './App.css';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import Dropdown from './components/dropdown/dropdown';
import Card from './components/card/card';
import { useEffect, useState } from 'react';

function App() {
  const [menuType, setMenuType] = useState("people");
  const [cardValue, setCardValue] = useState (null);

  useEffect(()=>{

  },[menuType])

  return (
    <div className="container">
      <Header text= "Star Wars Encyclopedia"/>
      <Menu updateType={setMenuType}/>
      <Dropdown type= {menuType} updateCardValue= {setCardValue}/>
      <Card cardValue= {cardValue} type= {menuType}/>
    </div>
  );
}

export default App;
