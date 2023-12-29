import React from "react";
import { Link } from "react-scroll";
import "../index.css";

function Navbar(){
    return(
        <div className="navbar">
            <Link to="about" smooth={true} duration={200} offset={-50}>about</Link>
            <Link to="gallery" smooth={true} duration={200} offset={-50}>gallery</Link>
            <Link to="testimonial" smooth={true} duration={200} offset={-50}>contact</Link>
            <Link to="services" smooth={true} duration={200} offset={-50}>services</Link>
        </div>
    );
}
export default Navbar;