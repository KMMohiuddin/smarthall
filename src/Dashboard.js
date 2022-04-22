import React from 'react'
import Sidebar from './Sidebar';
import Header from './Header';
import OpenConversation from './OpenConversation';
import { useConversations } from './ConversationsProvider';

export default function homePage({ id }) {
  const { selectedConversation } = useConversations()
  return (
    
    <div className="d-flex" style={{ height: '100vh' }}>
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>

    
  ) 
}