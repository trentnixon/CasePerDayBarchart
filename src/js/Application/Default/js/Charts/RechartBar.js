import React, { useEffect } from 'react'
import { useSelector, } from 'react-redux'
// eslint-disable-next-line
import { BarChart, Bar, Cell, XAxis, YAxis,ResponsiveContainer, Tooltip } from 'recharts';
// eslint-disable-next-line
import {scaleSequentialLog} from 'd3-scale'
import {interpolateOrRd} from 'd3-scale-chromatic'
 

const Color = (val, max)=>{
    let color = scaleSequentialLog(interpolateOrRd).domain([1, max.UI.SetMax])
    return color(val);
}


const ReChartBar = (props)=>{
    const MaxSet = useSelector(state => state.UI)
   
      useEffect(()=>{ },[])
    return(
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={props.Data}
                margin={{ top: 5, right: 0, left: 0, bottom: 10,
                }}
             >
            <XAxis 
                dataKey="name" 
                type="category" 
                tick={true}
                padding={{ top: 10 }} 
            />
           
            <YAxis 
                type="number" 
                scale="linear"
                 domain={[0, MaxSet.UI.MaxTrue]}  
                 minTickGap={10} 
     
            />
    
            <Tooltip />
           
            <Bar 
                dataKey="Cases" 
                fill="#c70000" 
                isAnimationActive={false}
                animationBegin={100} 
                animationDuration={1000} 
                animationEasing="ease-in-out"
            >
                {
                    props.Data.map((entry, i) => {
                        return <Cell key={i} fill={Color(entry.Cases, MaxSet)} />;
                    })
                }
            </Bar>
        </BarChart>         
        </ResponsiveContainer>
    )
}

export default ReChartBar;

