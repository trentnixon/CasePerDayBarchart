import React, { useEffect } from 'react'
import { useSelector, } from 'react-redux'
// eslint-disable-next-line
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,ResponsiveContainer, Tooltip, Legend, } from 'recharts';
// eslint-disable-next-line
import {scaleSequentialLog} from 'd3-scale'
import {interpolateOrRd} from 'd3-scale-chromatic'
import * as d3 from "d3-selection"
  
const Color = (val, max)=>{
    let color = scaleSequentialLog(interpolateOrRd).domain([1, max.UI.SetMax])
    // let color = scaleLog().domain([1, max.UI.SetMax]).range(['#fed976','#bd0026'])
    return color(val);
}

const makeKey = (max) => {

    // Needs to be able to select a div with id keyContainer

    const keyVals = [5, 50, 500, 5000, 50000];
    var keyWidth = document.querySelector("#keyContainer").getBoundingClientRect().width - 10
    var keySquare = keyWidth / keyVals.length;
    var barHeight = 15    
    var height = 30

    keySvg = d3.select("#keyContainer").append("svg")
        .attr("width", keyWidth)
        .attr("height", "40px")
        .attr("id", "keySvg")

    keyVals.forEach(function(d, i) {
        keySvg.append("rect")
            .attr("x", keySquare * i)
            .attr("y", 0)
            .attr("width", keySquare)
            .attr("height", barHeight)
            .attr("fill", Color(d, max))
            .attr("stroke", "#dcdcdc")

        keySvg.append("text")
            .attr("x", (i) * keySquare)
            .attr("text-anchor", "start")
            .attr("y", height)
            .attr("class", "keyLabel").text(d)    
    })

}

const ReChartBar = (props)=>{
    const MaxSet = useSelector(state => state.UI)
   
      useEffect(()=>{ },[MaxSet.UI.MaxTrue])
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

