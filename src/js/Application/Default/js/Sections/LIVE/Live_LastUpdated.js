import React  from 'react';

const Latest = (props)=>{
    const FormatDate = (str) => {
        // Formatt Date
        let dateReadable, dateObject;
        dateObject = new Date(Date.parse(str))
        dateReadable = dateObject.toDateString() 
        return dateReadable.substring(4)
  }

    return(
    <div className="subTitle Updated" id="subTitle">
            Showing the number of new cases per day, for countries with 1,000 or more cases in total. Total cases are shown in brackets. Days with negative values can occur when case figures are retrospectively adjusted, but negative values have been set to zero here to avoid confusion for the following countries: {props.Negative.toString()}. Last updated {FormatDate(props.Date)}</div>
    )
}
export default Latest;

