import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import useLocalStorage from "./useLocalStorage";
import homePage from "./homePage";
import { ContactsProvider } from "./ContactsProvider";
import { ConversationsProvider } from "./ConversationsProvider";
import { SocketProvider } from "./SocketProvider";



function App() {
  const [id, setId]=  useLocalStorage('id');
  const homePage = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )
  return (

    id ? <homePage id={id}/> : <Login onIdSubmit={setId}/>
    //id ? <homePage id={id}/> : <Header/>
  );
}

export default App;
