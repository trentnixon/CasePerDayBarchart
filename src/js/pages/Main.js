import React, { useEffect } from 'react';
// Import Layout Components
// Application
import CasesByCountry from "../Application/Default/Default";
const Application = (props)=>{
  useEffect(()=>{ console.log("Init Shell")},[])
  return( <CasesByCountry {... props}/>)
} 
export default Application;     