import React from 'react'
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar';


function App() {
  //const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">

      <Header />
      <h1>HELLO TEST 1</h1>

          <div className = "app__body">
              <Sidebar />
    

      
            </div>

    </div>
  );
}

export default App;
