import React from 'react';
import person from '../images/person.png'
import html from '../images/html.png';
import css from '../images/css.jfif'
import js from '../images/js.png';
import react from '../images/react.png';
import node from '../images/nodejs.jfif';
import git from '../images/git.png';
import c from '../images/c++.png';
import bootstrap from '../images/bootstrap-icon.png';

const AboutUs=()=>{

    return (
      <>
         <div id="about" className="about-us">
              <div className="about-us-person">
                <img className="about-us-pr" src={person} alt="person" />
              </div>

               <div className="about-us-text">
                
                    <h3>About Me</h3><br />
                    <hr className="about-us-text-hr" />

                
                    <p className="about-us-para">I am a Web Designer & Front-end developer with some good Handson Project experience.I'm interested in all kinds of visual communication,but my major focus is on designing web,mobile & tablets interface.I also have skills in other fields like branding,icon design or web devlopment</p>
                    <p className="about-us-para">I enjoy turning complex problems into simple,beautiful and intuitive design.When I'm not pushing pixels,you'ill find the cooking,gardening or working out in the park</p>
                     <div className="about-us-skills">
                       <div className="container">
                        <p className="about-us-skill-para">Languages/Library/Technology</p>
                        <hr className="about-us-skill-hr" /> 
                       </div>

                       <div className="skills">
                         <img className="skill-icons" src={html} alt="html" />
                         <img className="skill-icons" src={css} alt="css" />
                         <img className="skill-icons" src={js} alt="js" />
                         <img  className="skill-icons" src={react}  alt="react" />
                         <img className="skill-icons" src={node} alt="node" />
                         <img className="skill-icons" src={git} alt="git" />
                         <img className="skill-icons" src={c} alt="c++" />
                         
                         <img  className="skill-icons" src={bootstrap} alt="bootstrap"/>
                    </div>

                </div>
            
            </div>
            </div>
      
      </>
    )
}


export default AboutUs;