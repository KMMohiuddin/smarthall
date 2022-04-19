import React from 'react'
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar';
import Login from './Login';
import useLocalStorage from './useLocalStorage';
import homePage from './homePage'

function App() {
  const [id, setId]=  useLocalStorage('id')
  return (
    id ? <homePage id={id} /> : <Login onIdSubmit={setId} />
    
  )

}

export default App;

