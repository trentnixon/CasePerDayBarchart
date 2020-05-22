import React, { useEffect } from 'react';
// Full List

import CasesByDayFullList from "./js/Sections/Structure/Application";
import Header from "./js/Sections/Structure/Header"
import Controls from "./js/Sections/Inputs/ControlsHub"
import Footer from "./js/Sections/Structure/Footer"
const Application = (props)=>{
  useEffect(()=>{ console.log("Init Application")},[])
  return(
    <div id="Application" className="GlabsContainer">
      <div className="ResponsiveContainer ChartSection">
          <Header Date={props.Updated}  Negative={props.NegativeContries} />
          <Controls setMax={props.MaxTrue} Max={props.SetMax}/>
          <CasesByDayFullList {... props}/>
          <Footer />
      </div>
    </div>
  )  
} 
// TODO 
export default  Application;    