import React from 'react'
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

// import { useStateValue } from './StateProvider'

function Sidebar() {
   // const [{ user }, dispatch] = useStateValue();
    return (
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

    )
}

export default Sidebar
