//import React, { Component } from 'react';
import React, { useEffect } from 'react';
import { useSelector, } from 'react-redux'

import LoadingScreen from "./js/pages/Loading";
import Main from "./js/pages/Main";

// Import Functions
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
  useEffect(()=>{  console.log("Init APP") },
  [UI.UI.UI_SET])
  if(UI.UI.UI_SET){
    return ( <Main {... UI} />);
  }else{
    return( <LoadingScreen UI={UI} /> )
  }
}
export default App;