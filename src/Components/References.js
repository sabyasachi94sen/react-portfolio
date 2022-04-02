import React from "react";
import elizabeth from '../images/elizabeth.jfif';
import alberto from '../images/alberto.jpg';
import alexander from '../images/alexander.jpg';


const Reference=()=>{
    return(
        <>
        <center><h3 className="people-say-h3">What People Say about me</h3>
        <hr className="people-say-hr" /></center>

        <div className="people-say">
            <div className="people-say-image-container">
       
                <div className="elizabeth-container">
                    <img className="elizabeth-image" src={elizabeth} alt="elizabeth" />
                    <div className="elizabeth-text-container">
                        <p className="p1">Elizabeth Martin</p>
                        <p className="p2">Savespace Inc.</p>
                    </div>
                </div>
                 
                <div className="elizabeth-container">
                    <img className="elizabeth-image" src={alberto} alt="alberto" />
                    <div className="elizabeth-text-container">
                        <p className="p1">Alexander Donko</p>
                        <p className="p2">ScreepApp</p>
                    </div>
                </div>
                 
                <div className="elizabeth-container">
                    <img className="elizabeth-image" src={alexander} alt="alexander" />
                    <div className="elizabeth-text-container">
                        <p className="p1">Alexander Parkinson</p>
                        <p className="p2">MyTravel.com</p>
                    </div>
                </div>
            </div>

                 <div className="lorem-container">
                     <div className="lorem-text-container">
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tempore nulla deleniti animi dicta, qui quod reiciendis ut dolore laboriosam.</p>
                     </div>
                     <div className="lorem-text-container">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tempore nulla deleniti animi dicta, qui quod reiciendis ut dolore laboriosam.</p>
                    </div>
                    <div className="lorem-text-container">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tempore nulla deleniti animi dicta, qui quod reiciendis ut dolore laboriosam.</p>
                    </div>
                 </div>

                 <div className="testimonial-outer-container">

                    <div className="testimonial-internal-container">
                        <div className="testimonial">
                        <p>View more Testimonial</p>
                        </div>
                        <div className="font-awesome-container">
                           <i className="fas fa-arrow-right" style={{fontSize:"30px", position:"relative", bottom:"3px" }}></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Reference;