import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {OrderBySelect} from "../../../../../../actions/actions"
// { useState,useEffect } , useDispatch
const Select = ()=>{
    const STATE = useSelector(state => state.UI)
    const dispatch = useDispatch()
    const onChange=(e)=>{

         OrderBySelect(
            STATE.Data[STATE.Search.DataSet].Filtered, 
            STATE.Data[STATE.Search.DataSet].Daily,  
             e.target.value)
             
         dispatch({ type: 'SETREDRAWING' , payload:true});
    }
 
    return(
                <select onChange={onChange} id="cars">
                    <option  value={2}>Max-Min</option>
                    <option  value={3}>Min-Max</option>
                    <option  value={1}>Alphabetical</option>
                </select>
    )
}
 
export default Select;