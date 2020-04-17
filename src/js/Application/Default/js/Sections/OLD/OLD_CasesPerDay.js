import React, { Component } from 'react';
import CasesByDay from "../../Charts/CasesByDay";



export default  class Default extends Component {
    
    createDataSet(Country, Data){
        let Cases=[];
        let Categories=[]
        Data.map((c,i)=>{
            Cases.push(c[Country])
            Categories.push(c["index"])
        })
        return [Cases, Categories]
    }
  
    componentWillMount(){}
    render() {
        //console.log(this.props.UI.Search.Min,this.props.UI.Search.Country );
    
        let DataSeries = this.createDataSet( 
                this.props.UI.Search.Country,
                this.props.UI.Data[1].data
            );

    if(this.props.UI.FullPicture !== false){
        return(
            <div className="ChartSection">
                <h1># of Cases per Day</h1>
                <CasesByDay 
                    Country={this.props.UI.Search.Country}
                    Series={ [{ name: 'New Cases Per Day', data: DataSeries[0]}] }
                    Categories ={ DataSeries[1]}
                    dataLabels={false}
                />

            </div>
        )
    }
    else{
        return(
            <div>Building Chart</div>
        )
    }
    
  }
}