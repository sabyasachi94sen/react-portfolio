import React from 'react';
import './style.css';


const Forms=()=>{
    return (
      <>
            <center><h3 className="contact-me-h3">Contact Me</h3>
            <hr className="contact-me-hr" /></center>
        <div id="contact" className="contact-me">
                <div className="lets-connect-outer-container">
                    <div className="lets-connect-inner-container">
                    <h3 className="lets-connect-h3">Lets connect</h3>
                    <div className="lets-connect-lorem">
                    <span >Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta unde rerum minima explicabo similique quis officia vel sapiente incidunt?</span><br />
                    </div>
                    <i className="fa fa-envelope" aria-hidden="true"></i><span>&nbsp; &nbsp; sabyasachi9600@gmail.com</span><br />
                    <i className="fa fa-phone" aria-hidden="true"></i><span>&nbsp; &nbsp;+91 &nbsp; 9038055910</span><br />
                    <i className="fa fa-map-marker" aria-hidden="true"></i><span >&nbsp; &nbsp;Flat 4D,Roudrachaya Housing Society</span><br />
                    <span className="address">CC-13,MAR 66(SE),Kolkata-700156</span>

                </div>
            </div>

            <div className="send-me-outer-container">
               
                
                <div className="send-me-inner-container">
                    
                    <h3 className="send-me-connect-h3">Send me a Message</h3>
                    <div className="ip">
                        <p>First Name & Last Name<span>*</span></p>
                      <input type="text" />
                    </div>

                    <div className="ip">
                        <p>Phone Number<span>*</span></p>
                      <input type="number" />
                    </div>

                    <div className="ip">
                        <p>Email Address<span>*</span></p>
                      <input type="email" />
                    </div>

                     <div className="ip">
                         <p>Messege<span>*</span></p>
                        <textarea></textarea>
                    </div>

                    <button className="send-me-btn">Send us a message</button>
     
                 </div>
                 </div>
                 </div>

                 
                     
      </>
    )
}

export default Forms;