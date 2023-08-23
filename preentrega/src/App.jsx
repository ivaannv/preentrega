import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar'
import ItemListoConteiner from './Components/ItemListConteiner/ItemListConteiner'
import ItemCount from './Components/ItemCount/ItemCount'


function App() {
  
  return (
    <>
      <NavBar/>
      <ItemListoConteiner text= 'Bienvenidos a Iven Clothes'/>
      <ItemCount/>
    </>
  )
}

export default App
