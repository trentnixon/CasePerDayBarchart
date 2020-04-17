import React, { Component } from 'react';
import LineSince100Cases from "../../Charts/LineSince100Cases";



export default  class NewDeathRecovers extends Component {
    
    createDataSet(Country, NewCases,DeathCases,RecoveryCases){
        let New=[],Death=[],Recovery=[];
        let Categories=[]
        
        //console.log(NewCases);

        NewCases.map((c,i)=>{
            New.push(c[Country]);
            Categories.push(c["index"])   
        })
        DeathCases.map((c,i)=>{
            Death.push(c[Country]);
        })
        RecoveryCases.map((c,i)=>{
            Recovery.push(c[Country]);           
        })

        //console.log(New,Death,Recovery, Categories);
        return [New, Death,Recovery,Categories]
    }
  
    componentWillMount(){} 
    render() {
        //console.log(this.props.UI.Search.Min,this.props.UI.Search.Country );
    
        let DataSeries = this.createDataSet( 
                this.props.UI.Search.Country,
                this.props.UI.Data[0].data,
                this.props.UI.Data[2].data,
                this.props.UI.Data[3].data
            );

        //console.log(DataSeries);

    if(this.props.UI.Totals !== false){
        return( 
            <div className="ChartSection">
                <h1>New cases vs Recovery and Death rates</h1>
                <LineSince100Cases 
                    Country={this.props.UI.Search.Country}
                    Series={
                        [{
                            name: 'Confirmed Cases',
                            data: DataSeries[0]
                          },{
                            name: 'Confirmed Deaths ',
                            data: DataSeries[1]
                          },{
                            name: 'Confirmed Recovered ',
                            data: DataSeries[2]
                          }
                        ]
                    }
                    Categories ={ DataSeries[4]}
                  
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