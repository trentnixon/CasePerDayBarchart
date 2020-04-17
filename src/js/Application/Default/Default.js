import React, { useEffect } from 'react';
// Full List
import CasesByDayFullList from "./js/Sections/LIVE/LIVE_CasesPerDayFullList";

const Application = (props)=>{
  useEffect(()=>{ console.log("Init Application")},[])
  return(
    <div id="Application" className="GlabsContainer">
      <div className="ResponsiveContainer">
            <CasesByDayFullList {... props}/>
      </div>
    </div>
)
}
// TODO 
export default  Application; 