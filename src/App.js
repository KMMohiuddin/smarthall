import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import useLocalStorage from "./useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "./ContactsProvider";
import { ConversationsProvider } from "./ConversationsProvider";
import { SocketProvider } from "./SocketProvider";

function App() {
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )

  return (
    <div className="App"> <Header /> </div>
    //id ? dashboard : <Login onIdSubmit={setId} />
  )
}

export default App;
