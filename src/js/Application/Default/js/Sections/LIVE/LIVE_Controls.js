import React from 'react'
import MaxBtn from "./LIVE_MaxBtn";
import Select from "./LIVE_Select";
const Controls = (props)=>{
    return(
            <div className="Controls">
                <MaxBtn setMax={props.MaxTrue} Max={props.SetMax}/>
                <Select/>
            </div>
    )
}
export default Controls