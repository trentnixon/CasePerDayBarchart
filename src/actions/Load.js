import axios from 'axios';
import store from "../store/store";
var _ = require('lodash');

export function FetchData(){

    /** Set Properties */
  
    /** Set Methods */ 
    this.min=0;
    this.max=0
    this.start = () => {
 
        this.init=[  
            'https://interactive.guim.co.uk/2020/03/coronavirus-widget-data/confirmed_total_ecdc.json',
            'https://interactive.guim.co.uk/2020/03/coronavirus-widget-data/confirmed_daily_ecdc.json',
            'https://interactive.guim.co.uk/2020/03/coronavirus-widget-data/negative_case_countries.json',
            '/assets/json/country-features.json'
        ]
        
        axios.all(this.init.map(l => axios.get(l)))
        .then(axios.spread(function (...res) {

               let FinalTotals=[], FullPicture=[];

               let Total =res[0].data[res[0].data.length-1];

               Object.keys(Total).map((c,i)=>{
                        if(Total[c]>this.max){  
                            FinalTotals.push(
                                {
                                    continent: res[3].data[c].continent,
                                    region:res[3].data[c].region,
                                    income_group:res[3].data[c].income_group,
                                    economy:res[3].data[c].economy,
                                    Name:c,
                                    Total:Total[c],
                                }
                            )
                        }
                    return true;
                })
               

                // change Load Order
                // ['Name'] = Alphbetical , ['Total'] = by Numbers max-min
                FinalTotals = _.orderBy(FinalTotals, ['Total'], ['desc', 'asc']);
                
                FullPicture = createDataSet(FinalTotals, res[1].data)

                FinalTotals.map((T,i)=>{ T.data = FullPicture[i] })
         
                store.dispatch({ type:"STORE_UPDATED", payload:Total.date });
                store.dispatch({ type:"STORE_FILTERED", payload:FinalTotals});
                store.dispatch({ type:"STORE_FULLPICTURE", payload: FullPicture} );
                store.dispatch({ type:"SETNEGITIVECOUNTRY", payload:res[2].data});
                store.dispatch({ type:"UI_SET", payload:true });
                store.dispatch({ type:"STORE_DATA", payload:res });
                store.dispatch({ type:"STORE_MIN", payload:this.max });
               
            }.bind(this)) 
        )
        .catch(function (error) { console.log(error); });
    }
}


// TODO : Clean this up
export const createDataSet = (Countrys, Data) => {
    let Cases=[];
   // let FullPicture=[]
    let Categories=[]
    let MaxCases=0;

    let Rechart=[]
    let ReChartFull =[]
    Countrys.map((country,i)=>{

        Cases=[];
        Categories=[];
        Rechart=[]

        Data.map((c,i)=>{ 
            //console.log(c[country['Name']], c[country['Total']])
            if( c[country['Name']] > MaxCases) { MaxCases = c[country['Name']] }

                Cases.push(c[country['Name']]); Categories.push(c["date"]);
                Rechart.push({
                    name:FormatDate(c["date"]),
                    Cases:c[country['Name']]
                })
            return true;
        })
        //FullPicture.push([Cases, Categories])
        ReChartFull.push(Rechart)
        return true;
    })

    store.dispatch({ type:"SETMAXCASENUM", payload:Math.round(MaxCases/1000)*1000 });
    //store.dispatch({ type:"SET_MAX", payload:undefined });
    store.dispatch({ type:"STORE_RECHART", payload:ReChartFull }); 
 
    //console.log(FullPicture);

    return ReChartFull 
}



const FormatDate = (str) => {
    // Formatt Date
    let dateReadable, dateObject;
    dateObject = new Date(Date.parse(str))
    dateReadable = dateObject.toDateString() 
    return dateReadable.substring(4,11)
}