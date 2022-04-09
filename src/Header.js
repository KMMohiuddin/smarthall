import React from 'react'
import './Header.css'
//import { useStateValue } from './StateProvider'

import DashboardIcon from '@mui/icons-material/Dashboard'; //dashboardIcon
import AirlineSeatIndividualSuiteOutlinedIcon from '@mui/icons-material/AirlineSeatIndividualSuiteOutlined';//seat management icon
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';//chat
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';//payment
import AddAlertRoundedIcon from '@mui/icons-material/AddAlertRounded';//notification
import SettingsIcon from '@mui/icons-material/Settings';//settings
import LogoutIcon from '@mui/icons-material/Logout'; // logoutIcon
import ArticleIcon from '@mui/icons-material/Article'; //hall requisition
import AssistantIcon from '@mui/icons-material/Assistant'; //hall suggestion


function Header() {
   // const [{ user }, dispatch] = useStateValue();
    return (
        <div className = "header">
            <div className = "header__left">
                <img 
                    src = "https://raw.githubusercontent.com/KMMohiuddin/smarthall/master/image_2022-04-07_215828742.png"
                    alt = "SH-Logo"
                />
            </div>

            <div className = "header__middle">
                
            </div>
            <div className = "header__right">
               
            </div>
        </div>
    )
}

export default Header
