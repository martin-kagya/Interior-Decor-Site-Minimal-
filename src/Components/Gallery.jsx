import React, { useState, useEffect } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
const imageLinks = [
    "../Image/becca-tapert-dO3qTKxwik0-unsplash.jpg",
    "../Image/bench-accounting-nvzvOPQW0gc-unsplash.jpg",
    "../Image/collov-home-design-js8AQlw71HA-unsplash.jpg",
    "../Image/kam-idris-kyt0PkBSCNQ-unsplash.jpg",
    "../Image/michael-oxendine-GHCVUtBECuY-unsplash.jpg",
    "../Image/roberto-nickson-rEJxpBskj3Q-unsplash.jpg",
    "../Image/spacejoy-YqFz7UMm8qE-unsplash.jpg"

];

function Gallery() {
    const [imageIndex, setImageIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('gallery-animation');
    function NextImage (){
        setImageIndex((imageIndex + 1) % imageLinks.length);
    }
    function PreviousImage (){
        setImageIndex((imageIndex - 1 + imageLinks.length) % imageLinks.length);
    }
    return (
        <div className="gallery-container" id="gallery">
            <h2>OUR GALLERY</h2>
            <div className="gallery">
                <div className="imageStyle" style={{ backgroundImage: `url(${imageLinks[imageIndex]})` }}></div>
            </div>
            <div className="button-container">
                <button className="gallery-button" onClick={PreviousImage}><MdArrowBackIos /></button>
                <button className="gallery-button" onClick={NextImage}><MdArrowForwardIos /></button>
            </div>
        </div>
    );
}

export default Gallery;