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
            '/assets/json/country-features.json',
            'https://interactive.guim.co.uk/2020/03/coronavirus-widget-data/confirmed_total_deaths_ecdc.json',
            'https://interactive.guim.co.uk/2020/03/coronavirus-widget-data/confirmed_daily_deaths_ecdc.json',
            'https://interactive.guim.co.uk/2020/03/coronavirus-widget-data/negative_death_countries.json'  
        ]
         
        axios.all(this.init.map(l => axios.get(l)))
        .then(axios.spread(function (...res) {

                // Groups
                let GroupBy = res[3].data;
                // Cases
                let CasesDaily = res[1].data;
                let CasesBase =res[0].data[res[0].data.length-1]; 
                let FinalTotalsCases=[], CasesFullPicture=[];
                // Deaths
                let DeathsDaily = res[5].data;
                let DeathTotals = res[4].data[res[4].data.length-1]
                let DeathTotalsFinal=[], DeathFullPicture=[];
                

                // 1. Create Data Objects for App
                FinalTotalsCases = this.CreateDataObject(CasesBase, GroupBy)
                DeathTotalsFinal =this.CreateDataObject(DeathTotals, GroupBy)
                
                // 2. Find Data
                CasesFullPicture = createDataSet(FinalTotalsCases, CasesDaily, 'Cases')
                DeathFullPicture = createDataSet(DeathTotalsFinal, DeathsDaily, 'Deaths')

                // 3. Inclue Data in Object
                FinalTotalsCases.map((T,i)=>{ T.data = CasesFullPicture[i] })
                DeathTotalsFinal.map((T,i)=>{ T.data = DeathFullPicture[i] })

                // 4.  Dispatch the Data to the Reducer
                // Cases
                store.dispatch({ type:"STORE_CASES_FILTERED", payload:FinalTotalsCases});
                store.dispatch({ type:"STORE_CASES_FULLPICTURE", payload: CasesFullPicture} );
                store.dispatch({ type:"SET_CASES_NEGITIVE_COUNTRY", payload:res[2].data});
                store.dispatch({ type:"STORE_CASES_DAILY", payload:CasesDaily});

                // Deaths
                //DeathsDaily
                store.dispatch({ type:"STORE_DEATHS_FILTERED", payload:DeathTotalsFinal});
                store.dispatch({ type:"STORE_DEATHS_FULLPICTURE", payload: DeathFullPicture} );
                store.dispatch({ type:"SET_DEATHS_NEGITIVE_COUNTRY", payload:res[6].data});
                store.dispatch({ type:"STORE_DEATHS_DAILY", payload:DeathsDaily});


                // UI
                store.dispatch({ type:"STORE_UPDATED", payload:CasesBase.date });
                store.dispatch({ type:"UI_SET", payload:true });
                //store.dispatch({ type:"STORE_DATA", payload:res });
                store.dispatch({ type:"STORE_MIN", payload:this.max });
               
            }.bind(this)) 
        )
        .catch(function (error) { console.log(error); });
    }


    this.CreateDataObject = (Data, Groups)=>{
            let CompTotals=[]
            Object.keys(Data).map((c,i)=>{
                if(Data[c]>this.max){  
                    CompTotals.push(
                        {
                            continent: Groups[c].continent,
                            region:Groups[c].region,
                            income_group:Groups[c].income_group,
                            economy:Groups[c].economy,
                            Name:c,
                            Total:Data[c],
                        }
                    )
                }
            return true
        })

        // Order by Max Totals Cases
        // ['Name'] = Alphbetical , ['Total'] = by Numbers max-min
        CompTotals =  _.orderBy(CompTotals, ['Total'], ['desc', 'asc'])
       
        return CompTotals;
    }
}



// TODO : Clean this up
export const createDataSet = (Countrys, Data, Category) => { 
    let Cases=[];
    let Categories=[]
    let MaxCases=0;
    let Term;
    let Rechart=[]
    let ReChartFull =[]
    Countrys.map((country,i)=>{

        Cases=[];
        Categories=[];
        Rechart=[]
        Term = [Category];

        Data.map((c,i)=>{ 
            if( c[country['Name']] > MaxCases) { MaxCases = c[country['Name']] }
                Cases.push(c[country['Name']]); Categories.push(c["date"]);
                Rechart.push({
                    name:FormatDate(c["date"]),
                    [Term]:c[country['Name']]
                })
            return true;
        })
        ReChartFull.push(Rechart)
        return true;
    })

    store.dispatch({ type:"SETMAXCASENUM", payload:Math.round(MaxCases/1000)*1000 });
    return ReChartFull 
}


const FormatDate = (str) => {
    // Formatt Date
    let dateReadable, dateObject;
    dateObject = new Date(Date.parse(str))
    dateReadable = dateObject.toDateString() 
    return dateReadable.substring(4,11)
}