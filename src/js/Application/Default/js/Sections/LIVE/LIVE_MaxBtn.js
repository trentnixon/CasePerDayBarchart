import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'

const MaxBtn = (props)=>{
    const MaxSet = useSelector(state => state.UI)
    const [Label,setLabel] = useState("Show max scale for group")
    const dispatch = useDispatch()
    
    const handleClick=()=>{
        let Payload=undefined;
        if(typeof MaxSet.UI.MaxTrue === 'number')
        { 
                Payload=undefined 
                setLabel("Show max scale for group")
            }
        else
        {       
                Payload=MaxSet.UI.SetMax;
                setLabel("Show max scale for each chart ")
        }
        dispatch({ type: 'SET_MAX' , payload:Payload});
    }
    useEffect(()=>{ },[]) 
    return (
        <button onClick={handleClick}>
            {Label}
        </button>
    )
}

export default MaxBtn;