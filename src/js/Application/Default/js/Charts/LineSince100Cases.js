import React from "react";
import update from 'react-addons-update'
import Chart from "react-apexcharts";

export default class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series:this.props.Series,
        options: {
          chart: {
            height: 500,
            type: 'line',
            toolbar: {
                show: false, 
            }
          },
         
          stroke: {
            width: 2
          },
          markers: {
              size: 0,
          },
          
          colors: ['#cc0a11', '#484f53','#63717a'],      
          dataLabels: {
            enabled: false,
            formatter: function (val) {
              return val + " Days" ;
            },
            offsetY: -10,
            style: {
              fontSize: '12px',
              colors: ["#304758"]
            }
          },
          xaxis: {
            categories: this.props.Categories,
            type:"numeric",
            position: 'bottom',
            tickAmount: 5,
              logarithmic: true,
            title: {
                text: "",
            },
    
            labels: {
                show: true,
                formatter: function (val) {
                    return val + " Days";
                  }
            },
            axisBorder: {
              show: true
            },
            axisTicks: {
              show: true,
              
            },
            tooltip: {
              enabled: true,
            }
          },
          yaxis: {
            logarithmic: true,
            min: 100,
            max: 100000,
            tickAmount: 3,
            forceNiceScale: true,
            axisBorder: { show: true},
            axisTicks: {show: true, },
            labels: {
              show: true,
              formatter: function (val) {
                return val;
              }
            }
          },
          legend: {
            show: true,
            floating:false,
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 0,
            fontSize: '12px',
            width:'100%',
            labels: {
              colors: '#767676',
              useSeriesColors: false
            },
            markers: {
              width: 10,
              height: 10,       
              fillColors: undefined,
              radius: 10,
              offsetX: 0,
              offsetY: 0
          },
            itemMargin: {
              horizontal: 0,
              vertical: 0
            },
          }
        },
      };
    }


UpdateState(){
    this.setState({ 
        series: update( this.state.series,{$set:this.props.Series } ),
        options:update(
            this.state.options,{
                xaxis: {
                    categories:{$set:this.props.Categories}
                },
                
            }
        )
    })
}

    componentWillUpdate(){ return true;}
    componentDidUpdate(nextProps, nextState){
        if(this.props.Country !== nextProps.Country){this.UpdateState()}
  }

    render() {
      return (
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="line" 
                height={300}
            />
      );
    }
  }

  /**
   *  annotations: {
            points: [{
              x: 100,
              y: 100,
              marker: {
                size: 8,
                fillColor: '#fff',
                strokeColor: 'red',
                radius: 1, 
                cssClass: 'apexcharts-custom-class'
              },
              label: {
                borderColor: '#FF4560',
                offsetY: 0,
                style: {
                  color: '#fff',
                  background: '#FF4560',
                },
          
                text: 'Point Annotation',
              }
            }]
          },
   */