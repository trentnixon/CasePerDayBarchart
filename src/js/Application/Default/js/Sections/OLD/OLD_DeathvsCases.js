import React, { Component } from 'react';
import CasesByDay from "../../Charts/CasesvDeaths";



export default  class Default extends Component {
    
    createDataSet(Country, Data, Data2){
        let Cases=[
            {
                name: 'Cases',
                data: [Data[Data.length-1][Country]]
              },
              {
                name: 'Deaths',
                data:  [Data2[Data2.length-1][Country]]
              }
        ];
        let Categories=["Cases","Deaths"]
        
        return [Cases, Categories]
    }
  
    componentWillMount(){}
    render() {
        //console.log(this.props.UI.Search.Min,this.props.UI.Search.Country );
    
        let DataSeries = this.createDataSet( 
                this.props.UI.Search.Country,
                this.props.UI.Data[0].data,
                this.props.UI.Data[2].data,
            );

            //console.log(DataSeries[0]);

    if(this.props.UI.Totals !== false){
        return(
            <div className="ChartSection">
                <h1> Confirmed Cases / Death rate</h1>
                <CasesByDay 
                    Country={this.props.UI.Search.Country}
                    Series={DataSeries[0]}
                    Categories={ DataSeries[1]}
                    dataLabels={true}
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

/**
 *  {
                    Countries.map((c,i)=>{
                       return(
                        <CasesByDay 
                            key={i}
                            Country={c}
                            DataSet={this.createDataSet(c,this.props.UI.Data[1].data)}
                        />
                       )
                    })
                }
 */