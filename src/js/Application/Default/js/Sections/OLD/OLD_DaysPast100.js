import React, { Component } from 'react';
import LineSince100Cases from "../../Charts/LineSince100Cases";



export default  class Default extends Component {
    
    createDataSet(Country, Data){
        let Cases=[];
        let Categories=[]

        Data.map((c,i)=>{
            if(c[Country]>100){
                Cases.push(c[Country]);
                console.log(Math.log(c[Country]))
                Categories.push(Cases.length);
            }
            // 16000
        })
        //console.log(Cases, Categories);
        return [Cases, Categories]
    }
  
    componentWillMount(){}
    render() {
        //console.log(this.props.UI.Search.Min,this.props.UI.Search.Country );
    
        let DataSeries = this.createDataSet( 
                this.props.UI.Search.Country,
                this.props.UI.Data[0].data
            );

    if(this.props.UI.Totals !== false){
        return(
            <div className="ChartSection">
                <h1># Days since first 100 Cases</h1>
                <LineSince100Cases 
                    Country={this.props.UI.Search.Country}
                    Series={
                        [{
                            name: 'Total Cases',
                            data: DataSeries[0]
                          }]
                    }
                    Categories ={ DataSeries[1]}
                  
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