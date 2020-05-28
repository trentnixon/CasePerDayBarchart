import React , {useEffect}from 'react'
import Updated from "./LastUpdated";
const Header = (props)=>{
    useEffect(()=>{
        console.log(props.Search.DataSet, props.Data[props.Search.DataSet])
    },[])
    return(
        <div className="headline-container">
                <h3>{props.Search.DataSet, props.Data[props.Search.DataSet].Title}</h3>
                <Updated Date={props.Date}  Negative={props.Negative} DataSet={props.Data[props.Search.DataSet]}/>
        </div>
    )
}
export default Header; 