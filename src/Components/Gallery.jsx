import React, { useState, useEffect } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
const imageLinks = [
    "/image/becca-tapert-dO3qTKxwik0-unsplash.jpg",
    "/image/bench-accounting-nvzvOPQW0gc-unsplash.jpg",
    "/image/collov-home-design-js8AQlw71HA-unsplash.jpg",
    "/image/kam-idris-kyt0PkBSCNQ-unsplash.jpg",
    "/image/michael-oxendine-GHCVUtBECuY-unsplash.jpg",
    "/image/roberto-nickson-rEJxpBskj3Q-unsplash.jpg",
    "/image/spacejoy-YqFz7UMm8qE-unsplash.jpg"

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