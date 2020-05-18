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
            Showing the number of new cases per day, for countries with 5,000 or more cases in total   
            {props.Negative.toString()}. 
            Last updated {FormatDate(props.Date)}</div>
    )
}
export default Latest;

