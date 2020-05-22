import React ,  { useState,useEffect }from 'react';

import {StoreMin} from "../../../../../../actions/actions"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function SimpleSelect() {

  const [min, setMin] = useState(100);
  const handleChange = event => { 
      setMin(event.target.value); 
      StoreMin(event.target.value)
    };

  useEffect(() => { setMin(100) },[]);

  return (

      <FormControl variant="outlined" className="Select SelectMin">
        <InputLabel shrink id="demo-simple-select-outlined-label"> Select a Min Total Cases {min}</InputLabel>
        <Select
            value={min}
            onChange={handleChange}
   
        >
          <MenuItem value={100}>100</MenuItem>
          <MenuItem value={200}>200</MenuItem>
          <MenuItem value={500}>500</MenuItem>
          <MenuItem value={800}>800</MenuItem>
          <MenuItem value={1000}>1000</MenuItem>
          <MenuItem value={1500}>1500</MenuItem>
          <MenuItem value={2000}>2000</MenuItem>
          <MenuItem value={3000}>3000</MenuItem> 
          <MenuItem value={5000}>5000</MenuItem>
        </Select>
      </FormControl>

  );
}
