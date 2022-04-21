import React, { useState } from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow' 
import DashboardIcon from '@mui/icons-material/Dashboard'; //dashboardIcon
import AirlineSeatIndividualSuiteOutlinedIcon from '@mui/icons-material/AirlineSeatIndividualSuiteOutlined';//seat management icon
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';//chat
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';//payment
import AddAlertRoundedIcon from '@mui/icons-material/AddAlertRounded';//notification
import SettingsIcon from '@mui/icons-material/Settings';//settings
import LogoutIcon from '@mui/icons-material/Logout'; // logoutIcon
import ArticleIcon from '@mui/icons-material/Article'; //hall requisition
import AssistantIcon from '@mui/icons-material/Assistant'; //hall suggestion
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Tab, Nav, Button, Modal } from 'react-bootstrap'
import Conversations from './Conversations'
import Contacts from './Contacts'
import NewContactModal from './NewContactModal'
import NewConversationModal from './NewConversationModal'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
  const [modalOpen, setModalOpen] = useState(false)
  const conversationsOpen = activeKey === CONVERSATIONS_KEY
  
  function closeModal() {
    setModalOpen(false)
  }

// import { useStateValue } from './StateProvider'

function Sidebar() {
   // const [{ user }, dispatch] = useStateValue();
    return (
        <container className="sidebar">
        <div className = "sidebar">
            <div className = "sidebar__top">


            <SidebarRow 
            Icon={AccountCircleIcon}
                title = "Bla bla bla"

                />
                <SidebarRow 
                Icon={DashboardIcon}
                title = "Dashboard"
                />
                <SidebarRow 
                Icon={AirlineSeatIndividualSuiteOutlinedIcon}
                title = "Seat Management"

                />
                <SidebarRow 
                Icon={ChatRoundedIcon}
                title = "Chat"

                />
                <SidebarRow 
                Icon={ArticleIcon}
                title = "Hall Requisition"

                />
                <SidebarRow
             Icon={SettingsIcon}
                title = "Setting"

                />
                <SidebarRow 
                Icon={AccountBalanceWalletRoundedIcon}
                title = "Payments"

                />
                <SidebarRow 
                Icon={AssistantIcon}
                title = "Hall suggestion"

                />
                <SidebarRow 
                Icon={LogoutIcon}
                title = "Logout"

                />
            </div>  
            
        </div>
            <div style={{ width: '250px' }} className="d-flex flex-column">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
              <Nav variant="tabs" className="justify-content-center">
                <Nav.Item>
                  <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="border-right overflow-auto flex-grow-1">
                <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                  <Conversations />
                </Tab.Pane>
                <Tab.Pane eventKey={CONTACTS_KEY}>
                  <Contacts />
                </Tab.Pane>
              </Tab.Content>
              <div className="p-2 border-top border-right small">
                Your Id: <span className="text-muted">{id}</span>
              </div>
              <Button onClick={() => setModalOpen(true)} className="rounded-0">
                New {conversationsOpen ? 'Conversation' : 'Contact'}
              </Button>
            </Tab.Container>
      
            <Modal show={modalOpen} onHide={closeModal}>
              {conversationsOpen ?
                <NewConversationModal closeModal={closeModal} /> :
                <NewContactModal closeModal={closeModal} />
              }
            </Modal>
          </div>
          </container>

    )
}
}

