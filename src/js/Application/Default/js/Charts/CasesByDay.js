import React, { useEffect } from 'react'
import { useSelector, } from 'react-redux'
import Chart from "react-apexcharts";


const hues = ['#90dcff','#00b2ff','#0084c6','#005689','#ff7f0f','#e05e00','#bd5318','#ff4e36','#c70000','#ab0613','#bb3b80','#7d0068']

const BarChart = (props)=>{
  const numberWithCommas = (x) => { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}
  
  const MaxSet = useSelector(state => state.UI)

  const Options = {

    options: { 
      chart: {
        height: 500,  
        type: 'bar',
        toolbar: { show: false, },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800,
          animateGradually: {
              enabled: false,
              delay: 10
          },
          dynamicAnimation: {
              enabled: true,
              speed: 10
          }
        }
      },
      
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top', // top, center, bottom
          },
          horizontal: false,
            endingShape: 'flat',
            columnWidth: '80%',
            distributed: false,
            colors: {
                ranges: [{
                    from: 0,
                    to: 100,
                    color:hues[0]
                },{
                    from: 100,
                    to: 500,
                    color:hues[1]
                },{
                    from: 500,
                    to: 1000,
                    color:hues[2]
                },{
                    from: 1000,
                    to: 5000,
                    color:hues[3]
                },{
                        from: 5000,
                        to: 10000,
                        color:hues[4]
                },{
                      from: 10000,
                      to: 15000,
                      color:hues[5]
                },{
                        from: 15000,
                        to: 20000,
                        color:hues[6]
                    },{
                        from: 20000,
                        to: 25000,
                        color:hues[7]
                    },{
                      from: 25000,
                      to: 30000,
                      color:hues[8]
                  },{
                    from: 30000,
                    to: 35000,
                    color:hues[9]
                },{
                  from: 35000,
                  to: 50000,
                  color:hues[10]
              },{
                from: 50000,
                to: 100000,
                color:hues[11]
            }],
            }
        }
      },
      
      dataLabels: {
        enabled: props.dataLabels,
        formatter: function (val) {
          return val ;
        },
        offsetY: -10,
        style: {
          fontSize: '10px',
          colors: ["#000000"]
        }
      },
      xaxis: {
        categories: props.Categories,
        type: 'datetime',
        position: 'bottom',
        tickAmount: 5,
        forceNiceScale: true,
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: true
        },
        labels: {
          show: true,
          rotate: -45,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        forceNiceScale:true,
        min:0,
        max:MaxSet.UI.MaxTrue,
      
        axisBorder: {
          show: true
        },
  
        axisTicks: {
          show: true,
        },
        labels: {
          show: true,
         
          formatter: function (val) {
            return numberWithCommas(val.toFixed(0));
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
        itemMargin: {
          horizontal: 0,
          vertical: 0
        },
      }
    },
  }

  useEffect(()=>{console.log("Init Bar Chart")},[])
  return(
    <Chart
      options={Options.options}
      series={props.Series}
      type="bar"
  />
  )
}

export default BarChart;
