import React from 'react'
import MaxBtn from "./LIVE_MaxBtn";

const Controls = (props)=>{
    return(
<div className="Controls">
                    <MaxBtn setMax={props.MaxTrue} Max={props.SetMax}/>
            </div>
    )
}
export default Controls