import React from "react";
import "../index.css";
import { useState } from "react";

function About(){
    return(
        <>
            <div className="about-container" id="about">
                <h2>ABOUT US</h2>
                <p>Welcome to Houzes – Where Your Space Becomes a Masterpiece!
                    At Houzes, we believe that a house becomes a home when it’s personalized:
                    we believe that every space has the potential to be extraordinary. 
                    Our passion for interior design goes beyond aesthetics; 
                    it's about creating living environments that reflect the unique personalities and lifestyles of our clients.
                </p>
                <h2>OUR APPROACH</h2>
                <p>At the heart of our approach is a commitment to personalized design. 
                We understand that each client is unique, 
                and their spaces should mirror their individual tastes and preferences. 
                Our team of skilled designers collaborates closely with clients, 
                ensuring that every detail aligns with their vision.</p>
            </div>
        </>
    )
}

export default About;