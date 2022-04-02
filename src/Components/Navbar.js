import React from 'react'
import './style.css'

const Navbar=()=>{


    const handleNavbar=(e)=>{

       
        var btn=document.querySelector(".navbar");
       btn.classList.add("toggle-active");
       
      

    }
    const removeNavbar=(e)=>{
       
        var btn=document.querySelector(".navbar");
        btn.classList.remove("toggle-active");
       
       
      
       
    }
    const checkClass=()=>{

        var btn=document.querySelector(".navbar");
      var checkCase=btn.classList.contains("toggle-active")
       if(checkCase===true)
       btn.classList.remove("toggle-active");
    

    }
   

    return (
        <>
            <div className="banner" >
          <div className="name">
              <span>Sabyasachi Sen</span>
          </div>
        

          <div className="toggles-btn" onClick={handleNavbar}>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            

          </div>
        
          
          
            <div className="navbar">
                <span className="cancel" onClick={removeNavbar}>&times;</span>
                <a href="#home" ><span onClick={checkClass}>Home</span></a>
                <hr className="navbar-hr" />
               <a href="#about"> <span onClick={checkClass}>About</span></a>
               <hr className="navbar-hr" />
               <a href="#portfolio"> <span onClick={checkClass}>Portfolio</span></a>
               <hr className="navbar-hr" />
               <a href="#resume"><span onClick={checkClass}>Resume</span></a>
               <hr className="navbar-hr" />
              <a href="#contact"><span onClick={checkClass}>Contact</span></a>
            </div>
           

        </div>
        </>
    )
}

export default Navbar;