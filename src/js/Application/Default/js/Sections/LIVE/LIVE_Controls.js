import React, {useEffect} from 'react'
import { useSelector, } from 'react-redux'
import MaxBtn from "./LIVE_MaxBtn";
import Select from "./LIVE_Select";
import { Color } from "../../../../../../actions/actions"
import * as d3 from "d3-selection"


const Controls = (props)=>{
    const MaxSet = useSelector(state => state.UI.UI.SetMax)

    const makeKey = (max) => {

        // Needs to be able to select a div with id keyContainer
    
        const keyVals = [5, 50, 500, 5000, 50000];
        let keyWidth = document.querySelector("#keyContainer").getBoundingClientRect().width - 10;

        let keySquare = keyWidth / keyVals.length;
        let barHeight = 15    
        let height = 30
    
        // d3.select("#keyContainer svg").remove()

        let keySvg = d3.select("#keyContainer").append("svg")
            .attr("width", keyWidth)
            .attr("height", "40px")
            .attr("id", "keySvg")
     
        keyVals.forEach(function(d, i) {
            keySvg.append("rect")
                .attr("x", keySquare * i)
                .attr("y", 0)
                .attr("class", "keySquare")
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

        window.addEventListener('resize', function() {
                console.log("Resize")
                var newWidth = document.querySelector("#Application").getBoundingClientRect().width * 0.56 - 10;
                var newSquare = newWidth / keyVals.length;
                    
                d3.selectAll(".keySquare")
                    .attr("width", newSquare)
                    .attr("x", function(d,i) { return newSquare * i})

                d3.select("#keySvg")
                    .attr("width", newWidth)

                d3.selectAll(".keyLabel")
                    .attr("x", function(d,i) { return newSquare * i})   

            })


    } 

    useEffect(()=>{  makeKey(MaxSet); },[MaxSet])

    return(
            <div className="Controls">
                <div className="sml">
                    <p>&nbsp;</p>
                    <MaxBtn setMax={props.MaxTrue} Max={props.SetMax}/>
                </div>
                <div className="sml">
                    <p>Sort by</p>
                    <Select/>
               </div>
               <div className="lrg">
                    <p>Bar colour key</p>
                    <div id="keyContainer"></div>
                </div>
                    
            </div>
    )
}
export default Controls