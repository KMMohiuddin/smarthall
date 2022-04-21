import React from 'react'
import Sidebar from './Sidebar';
import Header from './Header';
import OpenConversation from './OpenConversation';
import { useConversations } from './ConversationsProvider';

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations()
  return (
    
    <div className="app">
      <Header />
      <Sidebar />
      {selectedConversation && <OpenConversation />}
      </div>
    
  ) 
}