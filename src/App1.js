import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useStateValue } from "./StateProvider";
import useLocalStorage from "./useLocalStorage";
import homePage from "./HomePage";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {/*{ !user ? (<Login />) : (
        <>
          <Header />

          <div className = "app__body">
            <Sidebar />
    
            <Feed />
    
            <Widget />
            </div>
        </>
      )}*/}
      <Header />

      <div className="app__body">
        <Sidebar />

        <Feed />
      </div>
    </div>
  );
}
