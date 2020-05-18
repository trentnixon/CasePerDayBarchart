import React  from 'react';

const Footer = ()=>{
    return(
        <div className="footer offset">
				    <div id="footerAnnotations"></div>	
				    <span id="footnote"></span> Guardian graphic. Source: <span id="sourceText">ECDC data compiled by <a href="https://ourworldindata.org/coronavirus-source-data">Our World In Data</a></span>
			</div>
    )
}

export default Footer;