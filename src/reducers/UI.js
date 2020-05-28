// import React from "react";

const InitialState ={
	Updated:false,
	Filtered:false,
	FullPicture:false,
	NegativeContries:'',
	Data:{
		Cases:{
			Filtered:false,
			FullPicture:false,
			NegativeContries:'',
			Daily:false,
			ColorBase:"interpolateOrRd"
		},
		Deaths:{
			Filtered:false,
			FullPicture:false,
			NegativeContries:'',
			Daily:false,
			ColorBase:"interpolateGnBu"
		}
	},
	Search:{
		Min:5000,
		Max:10000000,
		Country:"Australia",
		Continent:"",
		Region:"*",
		SortBy:2,
		DataSet:"Cases"
	},
	
	Filters:{
		Continent:[]
	},
	UI:{
		UI_SET:false,
		SetMax:undefined,
		MaxTrue:undefined, 
		Redrawing:false,
	}
}

const UI = (state=InitialState, action) =>{ 
		// eslint-disable-next-line 
		switch(action.type){
			// Fetch Initial Meta Data

			case "STORE_UPDATED":{
				return {...state, Updated:action.payload}
				// eslint-disable-next-line 
				break
			}

			// CASES
			case "STORE_CASES_FILTERED":{
				//console.log("STORE_CASES_FILTERED", action.payload)
				return {...state, Data:{ ...state.Data, Cases:{...state.Data.Cases,Filtered:action.payload }}}
				// eslint-disable-next-line 
				break
			}
			case "STORE_CASES_FULLPICTURE":{
				//console.log("STORE_CASES_FULLPICTURE", action.payload)
				return {...state, Data:{ ...state.Data, Cases:{...state.Data.Cases, FullPicture:action.payload }}}
				// eslint-disable-next-line 
				break
			}
			case "STORE_CASES_DAILY":{
				return {...state, Data:{ ...state.Data, Cases:{...state.Data.Cases,Daily:action.payload }}}
				// eslint-disable-next-line 
				break
			}
			
			case "SET_CASES_NEGITIVE_COUNTRY":{
				return {...state, Data:{ ...state.Data, Cases:{...state.Data.Cases,NegativeContries:action.payload }}}
				// eslint-disable-next-line 
				break
			}

			// Deaths

			case "STORE_DEATHS_FILTERED":{
				//console.log("STORE_CASES_FILTERED", action.payload)
				return {...state, Data:{ ...state.Data, Deaths:{...state.Data.Deaths,Filtered:action.payload }}}
				// eslint-disable-next-line 
				break
			}
			case "STORE_DEATHS_FULLPICTURE":{
				//console.log("STORE_CASES_FULLPICTURE", action.payload)
				return {...state, Data:{ ...state.Data, Deaths:{...state.Data.Deaths, FullPicture:action.payload }}}
				// eslint-disable-next-line 
				break
			}
			case "STORE_DEATHS_DAILY":{
				return {...state, Data:{ ...state.Data, Deaths:{...state.Data.Deaths,Daily:action.payload }}}
				// eslint-disable-next-line 
				break
			}
			
			case "SET_DEATHS_NEGITIVE_COUNTRY":{
				return {...state, Data:{ ...state.Data, Deaths:{...state.Data.Deaths,NegativeContries:action.payload }}}
				// eslint-disable-next-line 
				break
			}





			// UI
			case "UI_SET":{
				return {...state, UI:{...state.UI, UI_SET:action.payload} }
					// eslint-disable-next-line 
					break
				}
			case "SETREDRAWING":{
				return {...state, UI:{...state.UI, Redrawing:action.payload}}
					// eslint-disable-next-line 
					break
				}
			
			case "SET_MAX":{
				return {...state, UI:{...state.UI, MaxTrue:action.payload}}
				// eslint-disable-next-line 
				break
			}
			case "SETMAXCASENUM":{
				return {...state, UI:{...state.UI, SetMax:action.payload}}
				// eslint-disable-next-line 
				break
			}
			
			
			
		
			// Store Search
			case "FILTER_SEARCH_Continent":{
				return {...state, Search:{...state.Search, Continent:action.payload}}
				// eslint-disable-next-line 
				break
			}
			case "STORE_MIN":{
				return {...state, Search:{...state.Search, Min:action.payload}}
				// eslint-disable-next-line 
				break
			}
			case "FILTER_SEARCH_REGION":{
				return {...state, Search:{...state.Search, Region:action.payload}}
				// eslint-disable-next-line 
				break
			}
			case "STORE_COUNTRY":{
				return {...state, Search:{...state.Search, Country:action.payload}}
				// eslint-disable-next-line 
				break
			}
			case "STORE_SORTBY":{
				return {...state, Search:{...state.Search, SortBy:action.payload}}
				// eslint-disable-next-line 
				break
			}
			
			case "SETDATASET":{
				return {...state, Search:{...state.Search, DataSet:action.payload}}
				// eslint-disable-next-line 
				break
			}

			// Filters
			case "STORE_Continent":{
				return {...state, Filters:{...state.Filters, Continent:action.payload}}
				// eslint-disable-next-line 
				break
			}			
		}
		return state;
	}
export default UI;	