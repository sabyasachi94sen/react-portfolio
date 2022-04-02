import React from "react";
import './style.css';
import fb from '../images/fb.png';
import skype from '../images/skype.png';
import be from '../images/be.jfif';
import picasa from '../images/picasa.png';
import person from '../images/person.png';

const Resume=()=>{

    return (
        <>
         <center><h3 id="resume" className="resume-h3">Resume</h3>
            <hr className="port-folio-hr" /></center> 

        <div className="resume">
            <div className="resume-container">
           
                <h3 className="resume-title">Work Experience</h3>
                <hr className="resume-hr" />
                <div className="experience">
                   <div className="work">
                    <div className="work-container">
                       <p className="work-container-post">Quality Analyst-FULL TIME</p>
                      <p className="work-container-company">Netscribes Pvt Ltd</p>
                   </div>

                   
                       <button className="resume-btn">2021-2022</button>

                   
                </div>
                <h3 className="resume-title">Education</h3>
                <hr className="resume-hr" />
                <div className="work">
                <div className="work-container">
                    <p className="work-container-post">Institute of Engineering & Management(MAKAUT)</p>
                   <p className="work-container-company">B.Tech in Electronics & Communication Engineering with 7.17 CGPA</p>
                </div>
                <button className="resume-btn">2014-2018</button>
                </div>

                <h3 className="project-title">Projects</h3>
                <hr className="resume-hr" />
              
                <div className="project-inner-container">
                    <ul>
                    <li className="project-list">HTML Simple Backtracking Blog Page UI</li>
                    <li className="project-list">Mobile Responsive Twelve Hour Digital Clock</li>
                    <li className="project-list">Mobile Responsive Portfolio UI Design</li>
                    <li className="project-list">Mobile Resposnive ToDoApp Tasklist</li>
                    <li className="project-list">React Blog Project</li>
                </ul>
                   
                
                </div>


               </div>
            </div>
            <div className="resume-image-container">
                <div className="resume-image">
                  <img className="resume-person" src={person} alt="person" />
                </div>
                 <div className="resume-icon">
                     <img className="icons" src={fb} alt="facebook" />
                     <img className="icons" src={skype} alt="skype" />
                     <img className="icons" src={be} alt="be" />
                     <img className="icons" src={picasa} alt="picasa" />
                 </div>

            </div>

        </div>
        </>
    )
}
export default Resume;