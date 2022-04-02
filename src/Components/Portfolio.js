import React from 'react';

import './style.css';








const Portfolio=()=>{

   
    return (
        <>
           <center><h3 id="portfolio" className="port-folio-h3">Portfolio</h3>
        <hr className="port-folio-hr" /></center>

        <div className="port-folio-projects">
                <div className="projects-cover">
                <img className="projects" src={'https://media.geeksforgeeks.org/wp-content/uploads/sudoku.jpg'} onClick={()=>window.location.href="https://sabyasachi94sen.github.io/Backtracking/backtracking.html"} alt="port-folio1"/>
                <p className="project-tagline">Backtracking Blog Page UI Project</p>
                </div>
                <div  className="projects-cover">
                 <img className="projects" src={'https://codesdope-media.nyc3.cdn.digitaloceanspaces.com/prod/media/blog_images/15/2019/3/9/bg_digital_clock.jpg'} onClick={()=>window.location.href="https://sabyasachi94sen.github.io/Digital-clock/clock.html"} alt="port-folio2"/>
                 <p className="project-tagline">Digital Clock JS Project </p>
                 </div>
                 <div  className="projects-cover">
                 <img className="projects" src={'https://miro.medium.com/max/1400/1*VTKsiByHMcWDIxpFawp4fg.png'} onClick={()=>window.location.href="https://sabyasachi94sen.github.io/Todo_js/todoappjs"} alt="port-folio3"/>
                 <p className="project-tagline">ToDoApp JS TaskList Project</p>
                 </div>
                 <div  className="projects-cover">
                <img className="projects"  src={'https://themeforest.img.customer.envatousercontent.com/files/322665448/00_theme_preview.__large_preview.__large_preview.png?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=9512fdba8f02e248623407378de70cbd'} onClick={()=>window.location.href="https://romantic-haibt-74337d.netlify.app/"} alt="port-folio4" />
                <p className="project-tagline">React Blog Project</p>
                </div>
        </div>
        </>
    )
}

export default Portfolio;