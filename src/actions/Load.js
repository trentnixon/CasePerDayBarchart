import axios from 'axios';
import store from "../store/store";

export function FetchData(){

    /** Set Properties */
  
    /** Set Methods */ 
    this.min=0;
    this.max=0
    this.start = () => {
 
        this.init=[  
            'https://interactive.guim.co.uk/2020/03/coronavirus-widget-data/confirmed_total_ecdc.json',
            'https://interactive.guim.co.uk/2020/03/coronavirus-widget-data/confirmed_daily_ecdc.json',
            'https://interactive.guim.co.uk/2020/03/coronavirus-widget-data/negative_case_countries.json'

        ]
        
        axios.all(this.init.map(l => axios.get(l)))
        .then(axios.spread(function (...res) {
             
               let FinalTotals=[], FilteredTotals=[]
               let Total =res[0].data[res[0].data.length-1]
               Object.keys(Total).map((c,i)=>{
                        if(Total[c]>this.max){ FinalTotals.push([c,Total[c]]) } 
                        return true;
                })
              
                FilteredTotals = FilterUnwanted(FinalTotals,this.min,this.max) 
                store.dispatch({ type:"STORE_UPDATED", payload:Total.date });
                store.dispatch({ type:"STORE_FILTERED", payload:FilteredTotals});
                store.dispatch({ type:"STORE_FULLPICTURE", payload:createDataSet(FilteredTotals, res[1].data)});
                store.dispatch({ type:"SETNEGITIVECOUNTRY", payload:res[2].data});
                store.dispatch({ type:"UI_SET", payload:true });
                store.dispatch({ type:"STORE_DATA", payload:res });
                store.dispatch({ type:"STORE_MIN", payload:this.max });

            }.bind(this)) 
        )
        .catch(function (error) { console.log(error); });
    }
}

const  FilterUnwanted = (data, Min, Max) => {

    let Find=[], Forget=["Total","Cruise Ship"], Include=["Australia"];
    data.map((item,i)=>{
        if( Forget.indexOf(item[0]) !== 0 || Include.indexOf(item[0]) === 0 )  {   return( Find.push(item) )  }
        else{ return false; }
    })
    return Find;
}


export const createDataSet = (Countrys, Data) => {
    let Cases=[];
    let FullPicture=[]
    let Categories=[]
    let MaxCases=0;

    let Rechart=[]
    let ReChartFull =[]
    Countrys.map((country,i)=>{

        Cases=[];
        Categories=[];
        Rechart=[]

        Data.map((c,i)=>{ 
            //console.log(country[0])
            if( c[country[0]] > MaxCases) { MaxCases = c[country[0]] }


            Cases.push(c[country[0]]); Categories.push(c["date"]);
            Rechart.push({
                name:FormatDate(c["date"]),
                Cases:c[country[0]]
            })

            return true;
        })

        
        FullPicture.push([Cases, Categories])
        ReChartFull.push(Rechart)
        return true;
    })

    store.dispatch({ type:"SETMAXCASENUM", payload:Math.round(MaxCases/1000)*1000 });
    //store.dispatch({ type:"SET_MAX", payload:undefined });
    store.dispatch({ type:"STORE_RECHART", payload:ReChartFull }); 
 
    //console.log(FullPicture);

    return FullPicture 
}

const FormatDate = (str) => {
    // Formatt Date
    let dateReadable, dateObject;
    dateObject = new Date(Date.parse(str))
    dateReadable = dateObject.toDateString() 
    return dateReadable.substring(4,11)
}