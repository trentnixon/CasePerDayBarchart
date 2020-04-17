import React, { useEffect } from 'react'
//import BarChart from "../../Charts/CasesByDay";
import Updated from "./Live_LastUpdated";
import Footer from "./LIVE_FOOTER";
import MaxBtn from "./LIVE_MaxBtn";
import ReChartBar from "../../Charts/RechartBar";
// Draw Chart
/*
function ChartContainer(props){
   const numberWithCommas = (x) => { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}
  
    useEffect(()=>{ 
        console.log("Create Instance of Chart")},[]
        ) 

    return(
        <div className="ChartPod">
            <h2>{props.Country} ({numberWithCommas(props.Cases)})</h2>
                <BarChart 
                    Country={props.Country}
                    Series={ props.Series}
                    Categories ={ props.Categories}
                    dataLabels={props.dataLabels}
                /> 
                <div className="Meter">
                    <p>Gradient Meter</p>
                    <img src="/assets/images/Meter.png" alt="Meter" />
                </div>
        </div>
    )
}    
*/
const Rechart = (props)=>{
    const numberWithCommas = (x) => { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}
  
    return(
        <div className="ChartPod">
            <h2>{props.Country} ({numberWithCommas(props.Cases)})</h2>
                <ReChartBar {... props}/>
        </div>
        
    )
}

/**
 * 
 *  
 */
const ApplicationShell = (props)=>{
    
    useEffect(()=>{console.log("Init Application layout") },[])
    if(props.FullPicture !== false){
    return(
        <div className="ChartSection ">

            <div className="headline-container">
                    <h3>TITLE REQUIRED!! </h3>
                    <Updated Date={props.Updated}/>
                   
            </div>
            <div className="Controls">
                    <MaxBtn setMax={props.MaxTrue} Max={props.SetMax}/>
            </div>

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
            
            <Footer />
        </div>
    )}
    else{
        return( <div></div> )
    }
}
export default ApplicationShell;


/*

 <h3>Countries ({props.Filtered.length}) with {numberWithCommas(props.Search.Min)} or more Cases</h3>    

*/