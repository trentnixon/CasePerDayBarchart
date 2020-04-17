import React, { useEffect } from 'react'
//import BarChart from "../../Charts/CasesByDay";
import ReChartBar from "../../Charts/RechartBar";

const Rechart = (props)=>{
    const numberWithCommas = (x) => { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}
    return(
        <div className="ChartPod">
            <h2>{props.Country} ({numberWithCommas(props.Cases)})</h2>
                <ReChartBar {... props}/>
        </div>
    )
}

const ApplicationShell = (props)=>{
    
    useEffect(()=>{console.log("Init Application layout") },[])

    if(props.FullPicture !== false){
    return(
            <div className="ChartContainer">
                <div className="FullChartList">
                        {
                            props.FullPicture.map((c,i)=>{
                                return(
                                    <Rechart 
                                            key={i} 
                                            Country={props.Filtered[i][0]}
                                            Cases={props.Filtered[i][1]}
                                            Data={props.FullRechart[i]}
                                            Series={ [{ name: 'New Cases : ', data: c[0]}] }
                                            Categories ={ c[1]}
                                            dataLabels={false}
                                        /> 
                                )
                            })
                        }
                </div>
            
        </div>
    )}
    else{
        return( <div></div> )
    }
}
export default ApplicationShell;