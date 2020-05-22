import React ,  { useState,useEffect }from 'react';
import { useSelector, useDispatch} from 'react-redux'
 
  export default function SimpleSelect(props) {
  const Search = useSelector(state => state.UI.Search)
  const Filters = useSelector(state => state.UI.Filters.Continent)

  //const [Search, setSearch] = useState(props.Search)
  const [Continent, setContinent] = useState([])
  const [Regions, setRegions] = useState([])
  const [SelectedContinent, setSelectedContinent] = useState('*')
  const [RegionState, setRegionState] = useState(true)
  const dispatch = useDispatch() 

  const [count, setCount] = useState(0)
  // Create Selects
const CreateContinent = (data)=>{
  console.log(data)
  let ContinentSelect=[]
  data.map((C,I)=>{ ContinentSelect.push(<option key={I} value={I}>{C.continent}</option>) })
  setContinent(ContinentSelect)
}

  // Handle Selects
  /*
  const onChangeRegion = event =>{
      dispatch({ type: 'FILTER_SEARCH_REGION' , payload:event.target.value});
  }
  */

  const onChange = event => { 

    /*
        if(event.target.value !== '*'){
          let RegionSelect=[]
          Filters[event.target.value].region.map((R,I)=>{ RegionSelect.push(<option key={I} value={I}>{R}</option>)})
          setRegions(RegionSelect)
          setRegionState(false)
        }else{
          setRegions([])
          setRegionState(true)
        }
        */
        dispatch({ type: 'FILTER_SEARCH_Continent' , payload:event.target.value});
      };

  

  useEffect(() => { 
    CreateContinent(Filters); 
    setCount(count+1)
  },[RegionState]);

  return (
      <div> 
          <select onChange={onChange} id="Continent">
            <option  value={''}>All</option>
            <option  value={'continent'}>Continent</option>
            <option  value={'region'}>Region</option>
            <option  value={'income_group'}>Income Group</option>
            <option  value={'economy'}>Economy</option>       
          </select>
      </div>
  );
}


/*
 <select onChange={onChangeRegion} id="Region" disabled={RegionState}>
            <option  value={'*'}>All</option>
            {Regions}
          </select>
*/