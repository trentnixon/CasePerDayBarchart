// import React from "react";

const InitialState ={
	Data:false,
	Totals:false,
	Updated:false,
	Filtered:false,
	FullPicture:false,
	FullRechart:false,
	NegativeContries:'',
	Search:{
		Min:5000,
		Max:10000000,
		Country:"Australia",
		Continent:"",
		Region:"*"
	},
	Filters:{
		Continent:[]
	},
	UI:{
		SetMax:undefined,
		MaxTrue:undefined
	}
}

const UI = (state=InitialState, action) =>{ 
		// eslint-disable-next-line 
		switch(action.type){
			// Fetch Initial Meta Data
			case "STORE_DATA":{
				return {...state, Data:action.payload}
				// eslint-disable-next-line 
				break
			}
			case "STORE_UPDATED":{
				return {...state, Updated:action.payload}
				// eslint-disable-next-line 
				break
			}
			case "STORE_FILTERED":{
				return {...state, Filtered:action.payload}
				// eslint-disable-next-line 
				break
			}
			case "STORE_FULLPICTURE":{
				return {...state, FullPicture:action.payload}
				// eslint-disable-next-line 
				break
			}
			case "STORE_RECHART":{
				return {...state, FullRechart:action.payload}
				// eslint-disable-next-line 
				break
			}
			
			
			case "STORE_MIN":{
				return {...state, Search:{...state.Search, Min:action.payload}}
				// eslint-disable-next-line 
				break
			}
			case "STORE_COUNTRY":{
				return {...state, Search:{...state.Search, Country:action.payload}}
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
			
			case "SETNEGITIVECOUNTRY":{
				return {...state, NegativeContries:action.payload}
				// eslint-disable-next-line 
				break
			}
			// Store Filter Search
			case "FILTER_SEARCH_Continent":{
				return {...state, Search:{...state.Search, Continent:action.payload}}
				// eslint-disable-next-line 
				break
			}
			case "FILTER_SEARCH_REGION":{
				return {...state, Search:{...state.Search, Region:action.payload}}
				// eslint-disable-next-line 
				break
			}

			// Filters
			case "STORE_Continent":{
				return {...state, Filters:{...state.Filters, Continent:action.payload}}
				// eslint-disable-next-line 
				break
			}
			
			case "STORE_UI":{
			return {...state, UI:action.payload}
				// eslint-disable-next-line 
				break
			}
			case "UI_SET":{
			return {...state, UI_SET:action.payload}
				// eslint-disable-next-line 
				break
			}
		}
		return state;
	}
export default UI;	