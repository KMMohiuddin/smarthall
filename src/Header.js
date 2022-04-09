import React from 'react'
import './Header.css'
//import { useStateValue } from './StateProvider'
import SearchIcon from '@mui/icons-material/Search';
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

function Header() {
   // const [{ user }, dispatch] = useStateValue();
    return (
        <div className = "header">
            <div className = "header__left">
                <img 
                    src = "https://raw.githubusercontent.com/KMMohiuddin/smarthall/master/image_2022-04-07_215828742.png"
                    alt = "SH-Logo"
                />
                                <div className = "header__input">
                    <SearchIcon />
                    <input type = "text" placeholder = "search " className = "header__input__text" />
                </div>
            </div>

            <div className = "header__middle">
            <div className = "header__options header__options--active">
                    <DashboardIcon fontSize = "large" />
                </div>
                <div className = "header__options">
                    <AirlineSeatIndividualSuiteOutlinedIcon fontSize = "large" />
                </div>
                <div className = "header__options">
                    <ChatRoundedIcon fontSize = "large" />
                </div>
                <div className = "header__options">
                    <AccountBalanceWalletRoundedIcon fontSize = "large" />
                </div>
                
            </div>
            <div className = "header__right">
            <div className = "header__options">
                    <AddAlertRoundedIcon
                    />
                </div>
            <div className = "header__info">
                    <AccountCircleIcon 
                        //src = {user.photoURL}
                    />
                     <h4>bla bla bla</h4> 
                </div>
               
            </div>
        </div>
    )
}

export default Header
