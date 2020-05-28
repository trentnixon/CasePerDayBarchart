import React, {useEffect} from 'react'
// Selects
import SelectGroupBy from "./SelectGroupBy"
import SelectSortBy from "./Select_SortBy";

// Button
import BtnMaxMin from "./Btn_MaxMin";
// Key
import ChartKey from "./ChartKey";

const Controls = (props)=>{

    return(
            <div className="Controls">
                <div className="sml">
                    <p>&nbsp;</p>
                    <BtnMaxMin setMax={props.MaxTrue} Max={props.SetMax}/>
                </div>
                <div className="sml">
                    <p>Sort by</p>
                    <SelectSortBy/>
               </div>
               <div className="sml">
                    <p>Group by</p>
                    <SelectGroupBy/> 
               </div>
               <div className="lrg">
                    <p>Bar colour key</p>
                    <ChartKey {... props}/>
                </div>
            </div>
    )
}
export default Controls