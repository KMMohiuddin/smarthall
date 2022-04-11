import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow' 
// import { useStateValue } from './StateProvider'

function Sidebar() {
   // const [{ user }, dispatch] = useStateValue();
    return (
        <div className = "sidebar">
            <div className = "sidebar__top">


                <SidebarRow 
                title = "Dashboard"

                />
                <SidebarRow 
                title = "Hall Management"

                />
                <SidebarRow 
                title = "Hall Requisition"

                />
                <SidebarRow 
                title = "Hall Suggestion"

                />
                <SidebarRow 

                />
                <SidebarRow 

                />
                <SidebarRow 

                />
            </div>  
            
        </div>

    )
}

export default Sidebar
