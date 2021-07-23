import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';


function App() {

  return (
    <div className="App" >
      <NavBar />
      <ItemListContainer greeting='Este va a ser el contenedor de productos' />
    </div>
  )
}

export default App;
