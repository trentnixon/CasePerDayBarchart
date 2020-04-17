import React, { Component } from 'react';
import LineSince100Cases from "../../Charts/LineSince100Cases";
import Updated from "./Live_LastUpdated";
import Footer from "./LIVE_FOOTER"
function DrawChart(props){
    return(
        <div className="ChartPod"> 
            <h2>{props.Country}</h2>
                <LineSince100Cases 
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
        this.state = {
            CountriesList:[]
        };
      }


    createDataSet(Country, Data){
        let Cases=[], China=[], SG=[];
        let Categories=[], Series=[]
        Data.map((c,i)=>{
            if(c[Country]>100 || Country === 'China' || Country === 'Singapore'){
                Cases.push(c[Country]);
            }
            if(c['China']>100){
                China.push(c['China']);
            }
            if(c['Singapore']>100){
                SG.push(c['Singapore']);
            }
            Categories.push(i);
            return true
        })
        Series=[
            { name: Country, data: Cases},
            { name: 'China', data: China},
            { name: 'Singapore', data: SG}
        ]

        //console.log(China, SG)
        return [Series, Categories] 
    }
  
    FindCountries(){
        let Find=[];
        this.props.UI.Totals.map((item,i)=>{
            if(item[1] >= this.props.UI.Search.Min && item[0]!== "Total" && item[0] !== "Cruise Ship"){
                return( Find.push(item) )
            }
            else{
                return false;
            }
        })
        this.setState({ CountriesList: Find });
    }

    componentWillMount(){  this.FindCountries() }

    componentWillUpdate(){ return true;}
    componentDidUpdate(nextProps, nextState){ 
        if(this.props.UI.Search.Min !== nextProps.UI.Search.Min){ this.FindCountries() }}


    render() {
    if(this.props.UI.Totals !== false){
        return(
            <div className="ChartSection ">
                <h1>TITLE REQUIRED!! ({this.state.CountriesList.length} Countries listed with {this.props.UI.Search.Min} or more Cases)</h1>
                <Updated Date={this.props.UI.Data[0].data}/>
            <div className="FullChartList">
          
                {
                    this.state.CountriesList.map((country,i)=>{
                        //console.log(country[0])
                        let DataSeries = this.createDataSet( 
                            country[0],
                            this.props.UI.Data[0].data
                        );

                            return(
                                <DrawChart 
                                    key={i} 
                                    Country={country[0]}
                                    Cases={country[1]}
                                    Series={ DataSeries[0]}
                                    Categories ={ DataSeries[1]}
                                    dataLabels={true}
                                /> 
                            )
                    })
                }
                
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