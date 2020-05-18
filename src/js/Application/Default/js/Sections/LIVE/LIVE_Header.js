import React from 'react'
import Updated from "./Live_LastUpdated";
const Header = (props)=>{
    return(
        <div className="headline-container">
                <h3>New confirmed coronavirus cases per day</h3>
                
                <Updated Date={props.Date}  Negative={props.Negative}/>
        </div>
    )
}
export default Header;