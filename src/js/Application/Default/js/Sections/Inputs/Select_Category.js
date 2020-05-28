import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {ChangeCategory} from "../../../../../../actions/actions"
// { useState,useEffect } , useDispatch
const Select = ()=>{
    const STATE = useSelector(state => state.UI)
    const dispatch = useDispatch()
    const onChange=(e)=>{

      ChangeCategory(e.target.value)
         dispatch({ type: 'SETREDRAWING' , payload:true});
    }
 
    return(
                <select onChange={onChange} id="Categories">
                    <option  value={1}>Cases</option>
                    <option  value={2}>Deaths</option>
                </select>
    )
}
 
export default Select;