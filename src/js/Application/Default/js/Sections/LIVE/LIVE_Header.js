import React from 'react'
import Updated from "./Live_LastUpdated";
const Header = (props)=>{
    return(
        <div className="headline-container">
                <h3>TITLE REQUIRED!! </h3>
                <Updated Date={props.Date}/>
        </div>
    )
}
export default Header;