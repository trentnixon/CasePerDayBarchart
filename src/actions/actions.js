import store from "../store/store";
import {createDataSet} from "./Load"
import {scaleSequentialLog} from 'd3-scale'
import {interpolateOrRd, interpolateGnBu} from 'd3-scale-chromatic'
var _ = require('lodash');

// This Obj should be else where
const ACTIONS={
  Cases:['STORE_CASES_FILTERED','STORE_CASES_FULLPICTURE','STORE_CASES_DAILY'],
  Deaths:['STORE_DEATHS_FILTERED','STORE_DEATHS_FULLPICTURE','STORE_DEATHS_DAILY'],
}


export function Color(val, max){
  
  let COLORSET = store.getState().UI;
  let color;
  if(COLORSET.Search.DataSet === "Cases"){
    color = scaleSequentialLog(interpolateOrRd).domain([1, max])
  }else{
    color = scaleSequentialLog(interpolateGnBu).domain([1, max])
  }

  //console.log(val, max, color) 
  return color(val);
}

function getstate(){
    return store.getState().UI.FLIPSTATE;
}

export function StoreMin(min){
  store.dispatch({ type:"STORE_MIN", payload:min });
}

export function StoreCountry(country){
  store.dispatch({ type:"STORE_COUNTRY", payload:country });
}


export function openall(SET){
    let STATE= getstate();

   //console.log(STATE);

    if(SET === true){
        //console.log(SET , STATE);
        STATE = !STATE;
        
        store.dispatch({ type:"FLIP_STATE", payload:STATE });
    }
    store.dispatch({ type:"SET_FLIP", payload:SET });
}

export function TrackOpen(i,a){
 
        //console.log(a,  a.indexOf(i))

      let index = a.indexOf(i);
      if(index=== -1){ 
            a.push(i)
      }
      else{
        a.splice(index, 1);
      }

      store.dispatch({ type:"TRACK_CARD", payload:a});  
}


export function OrderBySelect(Filtered, Data,By){

  let SelectBy=[]
  let DATASET = store.getState().UI.Search.DataSet;

 switch(By) {
  case '1':
      // code block
      SelectBy = _.orderBy(Filtered, ['Name'], ['asc', 'desc']); 
   break; 
  case '2':
      // code block
      SelectBy = _.orderBy(Filtered, ['Total'], ['desc', 'asc']);
   break;
  case '3':
      // code block
      SelectBy = _.orderBy(Filtered, ['Total'], ['asc', 'desc']);
   break;
  }

 // console.log(SelectBy, createDataSet(SelectBy, Data));
 
  store.dispatch({ type:"STORE_SORTBY", payload:By});
  store.dispatch({ type:ACTIONS[DATASET][0], payload:SelectBy});
  store.dispatch({ type:ACTIONS[DATASET][1], payload:createDataSet(SelectBy, Data)});
}


export function ChangeCategory(Cat){
  switch(Cat) {
    case '1':
        store.dispatch({ type:"SETDATASET", payload:'Cases'});
     break; 
    case '2':
        // code block
        store.dispatch({ type:"SETDATASET", payload:'Deaths'});
     break;
    }
}
