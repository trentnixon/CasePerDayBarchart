import React, { useEffect } from 'react';
// Full List

import CasesByDayFullList from "./js/Sections/LIVE/LIVE_CasesPerDayFullList";
import Header from "./js/Sections/LIVE/LIVE_Header"
import Controls from "./js/Sections/LIVE/LIVE_Controls"
import Footer from "./js/Sections/LIVE/LIVE_FOOTER"
const Application = (props)=>{
  useEffect(()=>{ console.log("Init Application")},[])
  return(
    <div id="Application" className="GlabsContainer">
      <div className="ResponsiveContainer ChartSection">
          <Header Date={props.Updated} />
          <Controls setMax={props.MaxTrue} Max={props.SetMax}/>
          <CasesByDayFullList {... props}/>
          <Footer />
      </div>
    </div>
  ) 
}
// TODO 
export default  Application; 