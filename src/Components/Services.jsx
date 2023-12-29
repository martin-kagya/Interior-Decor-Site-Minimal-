import React from "react";
import "../App.css";

function Services(){
    return(
        <>
            <div className="services-container" id="services">
                <h2>OUR SERVICES</h2>
                <div className="services-flex">
                    <div className="interior-design"><span className="Caption">Interior Design</span></div>
                    <div className="architecture"><span className="Caption">Architecture</span></div>
                    <div className="kitchen-decor"><span className="Caption">Kitchen Decoration</span></div>
                </div>
            </div>
        </>
    )
}
export default Services;