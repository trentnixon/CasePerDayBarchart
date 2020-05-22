import React ,  { useState,useEffect }from 'react';
import {StoreCountry} from "../../../../../../actions/actions"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function SimpleSelect(props) {
  
  const [country, setCountry] = useState(100);
  const handleChange = event => { 
      setCountry(event.target.value); 
      StoreCountry(event.target.value)
    };

  useEffect(() => { setCountry(props.UI.FullPicture[0][0]) },[]);
  return (

      <FormControl variant="outlined" className="Select SelectCountry">
        <InputLabel shrink id="demo-simple-select-outlined-label"> Select a Country with {props.UI.Search.Min} min Cases</InputLabel>
        <Select
          id="demo-simple-select-outlined"
          value={country}
          onChange={handleChange}
        >
            {
                props.UI.FullPicture.map((item,i)=>{
                    if(item[1]>= props.UI.Search.Min){
                        return(
                            <MenuItem key={i} value={item[0]}>{item[0]}</MenuItem>
                            )
                    }
                    else{
                        return false;
                    } 
                })
            }
        </Select>
      </FormControl>

  );
}
