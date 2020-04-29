import React from 'react'
import { useSelector } from 'react-redux'
import {OrderBySelect} from "../../../../../../actions/actions"
// { useState,useEffect } , useDispatch
const Select = ()=>{
    const Data = useSelector(state => state.UI)

    const onChange=(e)=>{
        console.log(e.target.value, Data.Data[1].data);
        OrderBySelect(Data.Filtered,Data.Data[1].data,e.target.value)
    }

    return(
 
                <select onChange={onChange} id="cars">
                    <option  value={1}>Alpha</option>
                    <option  value={2}>Max</option>
                    <option  value={3}>Min</option>
                </select>
    
    )
}

export default Select;

//  <label htmlFor="select">Sort By :</label>
