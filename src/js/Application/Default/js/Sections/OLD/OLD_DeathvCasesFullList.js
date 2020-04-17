import React, { Component } from 'react';
import CasesvDeaths from "../../Charts/CasesvDeaths";

function DrawChart(props){
    return(
        <div>
            <h2>{props.Country}</h2>
                <CasesvDeaths 
                    Country={props.Country}
                    Series={ props.Series}
                    Categories ={ props.Categories}
                    dataLabels={props.dataLabels}
                />
        </div>
    )
}


export default  class Default extends Component {
    constructor(props) {
        super(props);
        this.state = { CountriesList:[]  };
      }


      createDataSet(Country, Data, Data2){
          console.log(Data[Data.length-1][Country]);
          
        let Cases=[
            {
                name: 'Recovered',
                data: [Data[Data.length-1][Country]]
              },
              {
                name: 'Deaths',
                data:  [Data2[Data2.length-1][Country]]
              }
        ];
        let Categories=["Recovered","Deaths"]
        
        return [Cases, Categories]
    }
  
    FindCountries(){
        let Find=[];
        //console.log(this.props.UI.Search.Min, this.props.UI.Totals)
        this.props.UI.Totals.map((item,i)=>{
            if(item[1] >= this.props.UI.Search.Min && item[0]!== "Total" && item[0] !== "Cruise Ship"){
                return( Find.push(item) )
            }
            else{
                return false;
            }
        })

        this.setState({  CountriesList: Find });
 
    }

    componentWillMount(){ this.FindCountries()  }
    componentWillUpdate(){ return true;}
    componentDidUpdate(nextProps, nextState){ if(this.props.UI.Search.Min !== nextProps.UI.Search.Min){ this.FindCountries() }}


    render() {

    if(this.props.UI.Totals !== false){
        return(
            <div className="ChartSection ">
                <h1>Recovery Rate / Death rate (Showing countries with a min 0f 1 Recovered)</h1>
            <div className="FullChartList">
          
                {
                    this.state.CountriesList.map((country,i)=>{
                        let Test = this.props.UI.Data[3].data[this.props.UI.Data[3].data.length-1][country[0]];
                      
                            if(Test !== undefined){
                                let DataSeries = this.createDataSet( 
                                    country[0],
                                    this.props.UI.Data[3].data,
                                    this.props.UI.Data[2].data,
                                );
        
                                    return(
                                        <DrawChart 
                                            key={i} 
                                            Country={country[0]}
                                            Cases={country[1]}
                                            Series={ DataSeries[0] }
                                            Categories ={ DataSeries[1]}
                                            dataLabels={true}
                                        /> 
                                    )
                            }
                            else{
                                return false
                            }
                        
                    })
                }
                
                </div>
            </div>
        )
    }
    else{
        return(  <div>Building Chart</div> )
    }
  }
}