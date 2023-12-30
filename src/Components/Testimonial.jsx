import React, { useEffect, useState } from "react";
import "../index.css";

function Testimonial(){
    let [counter, setCounter] = useState(0)
    const [animationClass, setAnimationClass] = useState('testimonial-animation')
    const testimonialTexts = [{
        person: "John Doe",
        text: "Stunning designs from this group of people"
    },
    {
        person: "James Smith",
        text: "I love the way they work, they are so professional"
    },
    {
        person: "Isiah Thomas",
        text: "I am so happy I chose them for my project"
    },
    {
        person: "Rashid Lamar",
        text: "No one does it better than them, they are the best"
    }
]
    useEffect(() => {
        setAnimationClass('testimonial-animation')
        const interval = setInterval(() => {
            setCounter(counter => (counter + 1) % testimonialTexts.length)
        }, 10000)
        return () => clearInterval(interval)
    }, [])
    function showTestimonial (){
        return (
            <div key={counter} className={`testimonial ${animationClass}`} id="testimonial">
                <p className="testimonial-text">{testimonialTexts[counter].text}</p>
                <p className="testimonial-person">- {testimonialTexts[counter].person}</p>
            </div>
        )
    }
    return(
        <>
            <div className="testimonial-container">
                {showTestimonial()}
            </div>
        </>
    )
}

export default Testimonial;