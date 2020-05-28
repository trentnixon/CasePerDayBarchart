import React ,  { useState,useEffect }from 'react';
import { useDispatch} from 'react-redux'
 
import Redraw from "../Structure/Redrawing";
const SimpleSelect = (props) => {

  const dispatch = useDispatch() 

  const [count, setCount] = useState(0)

  const SetNewValue = (value)=>{
    dispatch({ type: 'FILTER_SEARCH_Continent' , payload:value});
  }

  const onChange = event => {  
    console.log("CHANGED GROUP")

    dispatch({ type: 'SETREDRAWING' , payload:true});
    dispatch({ type: 'FILTER_SEARCH_Continent' , payload:event.target.value});
   //setTimeout(function(){SetNewValue(event.target.value)},500)    
  };

  useEffect(() => { 
    setCount(count+1)
  },[]);

  return (
      <div> 
          <select onChange={onChange} id="Continent">
            <option  value={''}>All</option>
            <option  value={'continent'}>Continent</option>
            <option  value={'region'}>Region</option>
            <option  value={'income_group'}>Income Group</option>  
          </select>
      </div>
  );
}

export default SimpleSelect