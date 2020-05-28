import React, {useEffect} from 'react'
import { useDispatch} from 'react-redux'
const Redrawing = (props)=>{    
    const dispatch = useDispatch() 
    const Redraw = ()=>{
        dispatch({ type: 'SETREDRAWING' , payload:false});
    }
    useEffect(()=>{
        console.log("Redrawing", props.UI.Redrawing);
        setTimeout(function(){Redraw()},2000)
        
    },[props.UI.Redrawing])

    if(props.UI.Redrawing){
        return(
            <div className="Redrawing">
                <h1>Loading...</h1>
            </div>
        ) 
    }
    else{
        return(
            <div></div>
        )
    }
       
}

export default Redrawing;