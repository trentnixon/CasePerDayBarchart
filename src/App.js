//import React, { Component } from 'react';
import React, { useEffect } from 'react';
import { useSelector, } from 'react-redux'

//import ReactGA from 'react-ga';

import LoadingScreen from "./js/pages/Loading";
import Main from "./js/pages/Main";

// Import Functions
//import { connect } from "react-redux";
import { FetchData } from "./actions/Load";

// Include CSS
import './App.css';
/**
 * Fetch the project Content an dset up the UI
 */
const Content = new FetchData();

// Start Fetch
Content.start();  

const App = ()=>{
  const UI = useSelector(state => state.UI)
  useEffect(()=>{ console.log("Init APP")},[UI.Data])
  if(UI.Data.length !== undefined){
    return ( <Main {... UI} />);
  }else{
    return( <LoadingScreen UI={UI} /> )
  }
}
export default App;