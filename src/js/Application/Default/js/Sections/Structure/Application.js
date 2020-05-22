import React, { useEffect, useState } from 'react'
import ReChartBar from "../../Charts/BarChart_Recharts";
import * as d3 from 'd3-array'
var _ = require('lodash');
const ApplicationShell = (props)=>{
const [Group, setGroup] = useState(false)

    useEffect(()=>{
        console.log("Init Application layout");
        if(props.Search.Continent.length !== 0 ){
            // Group By Selected: 
            setGroup(true)
            setGroup( _.orderBy(Array.from(d3.group(props.Filtered, d => d[props.Search.Continent])), [0], ['asc', 'desc']));
            console.log(Group);
        }else{
            // reset Layout
            setGroup(false)
        }
    },[props.Search, props.Filtered])


    if(props.Filtered !== false){
        if(Group === false){
            return(  
                <div className="ChartContainer">
                    <div className="FullChartList">
                            {
                                props.Filtered.map((c,i)=>{
                 
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
        }
        else{
            return(
                <div className="ChartContainer">
                    {
                      

                        Array.from(Group, ([key, values]) => {
                            console.log(key, values)
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
   
    useEffect(()=>{},[])

    return(
        <div className="ChartPod">
            <h2>{props.Country} ({numberWithCommas(props.Cases)})</h2>
            <ReChartBar  {... props} /> 
        </div>
    )
}