import React, { useEffect, useState } from 'react'
import ReChartBar from "../../Charts/RechartBar";
import * as d3 from 'd3-array'
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

const ApplicationShell = (props)=>{
    const [Group, setGroup] = useState(false)
   // const [Grouping, setGrouping] = useState()
    useEffect(()=>{
        console.log("Init Application layout");
        console.log(props.Search.Continent);


        if(props.Search.Continent.length !== 0 ){
            let NewGrouping
            setGroup(true)
            NewGrouping = d3.group(props.Filtered, d => d[props.Search.Continent])
            setGroup(NewGrouping);

        }else{
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

/**
 *   
 */