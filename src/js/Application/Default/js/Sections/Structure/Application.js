import React, { useEffect, useState } from 'react';
import { useSelector, } from 'react-redux'
import ReChartBar from "../../Charts/BarChart_Recharts";
import * as d3 from 'd3-array'
import Redrawing from "./Redrawing"
var _ = require('lodash');
const ApplicationShell = ()=>{
    const UI = useSelector(state => state.UI)
    const [Group, setGroup] = useState(false)
    const [count, setCount] = useState(0)
    const [DataSet, setDataSet] = useState(UI.Data[UI.Search.DataSet]);
  
    useEffect(()=>{
        setDataSet(UI.Data[UI.Search.DataSet]);
        console.log("Init Application");
        if(UI.Search.Continent.length !== 0 ){
            // Group By Selected:
            console.log("ORDERBY GROUP CREATED");
            setGroup(true)
            setGroup( _.orderBy(Array.from(d3.group(DataSet.Filtered, d => d[UI.Search.Continent])), [0], ['asc', 'desc']));
           

        }else{
            // reset Layout
            setGroup(false);
        }
        
    },[UI.Search, DataSet.Filtered])  

    if( UI.UI.Redrawing === true){
        return(  <Redrawing {... UI} /> )
    }
    else
    if(DataSet.Filtered !== false){
        if(Group === false){
            return(  
                <div className="ChartContainer">
                    <div className="FullChartList">
                            {
                                DataSet.Filtered.map((c,i)=>{
                                    return(
                                        <Rechart 
                                                key={i} 
                                                Country={c.Name}
                                                Cases={c.Total}
                                                Data={c.data}
                                                Limit = {DataSet.Filtered.length}
                                                setCount={setCount}
                                                count={count}

                                            /> 
                                    )
                                })
                            }
                    </div>
            </div>
            )
        }
        else{
            return(
                <div className="ChartContainer">
                    {
                        Array.from(Group, ([key, values]) => {
                            return(
                                <div className="GroupContainer" key={key}>
                                    <h1>{key}</h1>
                                    <div className="FullChartList">
                                        {
                                          
                                            values.map((c,i)=>{
                                                return(
                                                    <Rechart 
                                                            key={i} 
                                                            Country={c.Name}
                                                            Cases={c.Total}
                                                            Data={c.data}
                                                        /> 
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }
    else{
        return( <div></div> )
    }
}
export default ApplicationShell;


// Chart Display container
const Rechart = (props)=>{
    const numberWithCommas = (x) => { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}
    useEffect(()=>{},[props.Data])
    return(
        <div className="ChartPod">
            <h2>{props.Country} ({numberWithCommas(props.Cases)})</h2>
            <ReChartBar  
                count={props.count}
                setCount={props.setCount}
                {... props} 
            /> 
        </div>
    )
}