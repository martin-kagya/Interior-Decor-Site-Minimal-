import React from "react";
import "../App.css";

function Contact (){
    return(
        <>
            <div className="contact-container" id="contact">
                <h2>CONTACT US</h2>
                <form>
                    <div className="form-container">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Subject" />
                        <textarea placeholder="Message" className="large-grid"></textarea>
                    </div>
                    <button className="send-button">Send</button>
                </form>
            </div>
        </>
    )
}
export default Contact;