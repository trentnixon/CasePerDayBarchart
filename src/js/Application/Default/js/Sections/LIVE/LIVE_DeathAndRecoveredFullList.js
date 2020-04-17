import React, { Component } from 'react';
import CasesvDeaths from "../../Charts/CasesvDeaths";
import Updated from "./Live_LastUpdated";
import Footer from "./LIVE_FOOTER"
function DrawChart(props){
    return(
        <div className="ChartPod">
            <h2>{props.Country}</h2>
                <CasesvDeaths 
                    Country={props.Country}
                    Series={ props.Series}
                    Categories ={props.Categories}
                    dataLabels={props.dataLabels}
                    color={props.color}
                />
        </div>
    )
}


export default  class Default extends Component {
    constructor(props) {
        super(props);
        this.state = { CountriesList:[]  };
      }


      createDataSet(Data, Label){
          //console.log(Data[Data.length-1]);
          let Values=[];
          let Categories=[]
          let MyObject = Data[Data.length-1];
          Object.keys(MyObject).map((item,i)=>{
              //console.log(MyObject[item], item);
              if(item !== "index" && item !== "Total"){
                    Values.push(MyObject[item])
                    Categories.push(item)
              }
              return true
          })
          //console.log(Values, Categories)
        return [[{data: Values, name:Label}], Categories]
    }
  


    componentWillMount(){  }

    render() {
    
     let Deaths = this.createDataSet(this.props.UI.Data[2].data, 'Deaths')
     let Recovery = this.createDataSet(this.props.UI.Data[3].data, 'Recovered')

    if(this.props.UI.Totals !== false){
        return(
            <div className="ChartSection ">
                <h1>TITLE REQUIRED!! Recovery Rate / Death rate (Showing countries with a min 0f 1 Recovered)</h1>
                <Updated Date={this.props.UI.Data[0].data}/>
                
                <div className="FullChartList DoubleChart">
                        <DrawChart 
                            Country={"Death Rate per Country"}
                            Series={ Deaths[0] }
                            Categories ={ Deaths[1]}
                            dataLabels={true}
                            color='#d73027'
                        /> 
             
                        <DrawChart 
                            Country={"Recovery Rate per Country"}
                            Series={ Recovery[0] }
                            Categories ={ Recovery[1]}
                            dataLabels={true}
                            color='#4575b4'
                        /> 
                </div>
                <Footer />
            </div>
        )
    }
    else{
        return(  <div>Building Chart</div> )
    }
  }
}