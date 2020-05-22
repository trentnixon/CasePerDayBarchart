import store from "../store/store";
import {createDataSet} from "./Load"
import {scaleSequentialLog} from 'd3-scale'
import {interpolateOrRd} from 'd3-scale-chromatic'

var _ = require('lodash');

export function Color(val, max){
  
  let color = scaleSequentialLog(interpolateOrRd).domain([1, max])

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

  console.log(Filtered,Data );
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
  //console.log(SelectBy);

  store.dispatch({ type:"STORE_FILTERED", payload:SelectBy});
  store.dispatch({ type:"STORE_FULLPICTURE", payload:createDataSet(SelectBy, Data)});
}
