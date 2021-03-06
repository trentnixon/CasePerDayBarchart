import React, { useEffect } from 'react';
// Full List

import CasesByDayFullList from "./js/Sections/Structure/Application";
import CategorySelector from "./js/Sections/Structure/CategorySelector"
import Header from "./js/Sections/Structure/Header"
import Controls from "./js/Sections/Inputs/ControlsHub"
import Footer from "./js/Sections/Structure/Footer"

const Application = (props)=>{
  useEffect(()=>{ console.log("Init Application")},[])
  return(
    <div id="Application" className="GlabsContainer">
      <div className="ResponsiveContainer ChartSection">
         <CategorySelector DataSet={props.Search.DataSet} {... props}/>
          <Header Date={props.Updated}  Negative={props.NegativeContries} {... props}/>
          <Controls setMax={props.MaxTrue} Max={props.SetMax} DataSet={props.Search.DataSet}/>
          <CasesByDayFullList />
          <Footer />
      </div>
    </div>
  )  
} 
// TODO 
export default  Application;       