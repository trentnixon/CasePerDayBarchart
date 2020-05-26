import React ,  { useState,useEffect }from 'react';
import { useDispatch} from 'react-redux'
 
  export default function SimpleSelect(props) {
  //const Search = useSelector(state => state.UI.Search)
  //const Filters = useSelector(state => state.UI.Filters.Continent)
  //const [Search, setSearch] = useState(props.Search)
  //const [Continent, setContinent] = useState([])
  //const [Regions, setRegions] = useState([])
 // const [SelectedContinent, setSelectedContinent] = useState('*')
  //const [RegionState, setRegionState] = useState(true)
  const dispatch = useDispatch() 

  const [count, setCount] = useState(0)



  const onChange = event => {  dispatch({ type: 'FILTER_SEARCH_Continent' , payload:event.target.value}); };

  

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