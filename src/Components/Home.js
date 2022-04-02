import React from 'react';
import './style.css';
import person from '../images/person.png';
import wave from '../images/wave.svg';

const Home=()=>{
    return (
 
         <>
        <div id="home" className="intro">
            <img className="wave" src={wave} alt="wave"/>
            <div className="dev">
                <div className="text-container">
                <span className="text1">Hi, I am Sabyasachi Sen</span>
                <span className="text2">A Full-Stack Developer</span>
                </div>

                <p className="intro-para">Get ready to turn ideas into  reality</p>

                <div className="btn">
                    <button className="btn1">Hire Me</button>
                    <button className="btn2">Get Resume</button>
                </div>
            
            </div>

            <ul className="box_area">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className="person">
                <img className="pr" src={person} alt="person"/>
            </div>
        </div>
        </>
        
 
    )
}
export default Home;