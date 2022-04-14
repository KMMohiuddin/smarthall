
import React from 'react'
import './SidebarRow.css'


function SidebarRow( { src, Icon, title }) {
    return (
        <div className = "sidebarRow">
            {Icon && <Icon className = "sidebarRow__icon" />}
            <p>{title}</p>
        </div>
    )
}

export default SidebarRow
