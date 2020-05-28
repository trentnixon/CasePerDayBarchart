import React from 'react'
import ChangeCategory from "../Inputs/Select_Category";
const CategorySelector = (props)=>{
    return(
        <div className="CategorySelector">
                <div className="CategoryContainer">
                    <p>Currently showing</p>
                    <ChangeCategory/>
               </div>
        </div>
    )
}
export default CategorySelector;