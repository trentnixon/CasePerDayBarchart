
import store from "../store/store";

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