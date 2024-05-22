import React from "react";
import bannerImage from "../Landing Page Assets/imagine3-eva.png";


import {  FaRocket, FaBrain  } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
const Home=()=> {
    return(

     <div className="nor-home-container">

    

        <div className="nor-home-text-section">
            <h1 className="nor-primary-heading">Project</h1>
            <h1 className="nor-primary-heading-gradient">Nor</h1>
           
        </div>

        <div class="nor-wrapper">
            <div className="nor-home-image-container">
                <div className="nor-image-wrapper">
                     <img src={bannerImage} alt="" />
                </div>
            </div>
            <div class="nor-text-box">
                <h1 className="nor-secondary-heading">Mission Goals and Mission Key Events</h1>
                <div className="nor-align-icon-paragraph">
                        <div className="nor-icon">
                            <FaBrain color="white" className="nor-goals-icon" size="50"/>
                        </div>
                    <div className="nor-text-content">
                        <p className="nor-paragraph-1">Knowledge Enhancement</p> 
                        <p className="nor-paragraph-small">With this project, we had the opportunity to broaden our knowledge, thus we are aiming for even higher milestones.</p>
                    </div>
                </div>

                <div className="nor-align-icon-paragraph">
                        <div className="nor-icon">
                            <FiTarget color="white" size="50" className="nor-goals-icon"/>
                        </div>
                    <div className="nor-text-content">
                        <p className="nor-paragraph-1">Target</p>
                        <p className="nor-paragraph-small">Our goal is to compete in the 30K solid COTS category, with a maximum velocity of 2.05Mach.</p>
                    </div>
                </div>
                
                <div className="nor-align-icon-paragraph">
                        <div className="nor-icon">
                            <FaRocket color="white" size="50" className="nor-goals-icon"/>
                        </div>
                    <div className="nor-text-content">
                        <p className="nor-paragraph-1">NOR's Flight Optimization</p>
                        <p className="nor-paragraph-small">The maximum acceleration reached by LUNA should be 485.56ft/s^2, with a time to apogee of 39.8s.In the end, the flight time we are aiming for is 604s, and the ground hit velocity of 14.5ft/s.</p>
                    </div>
                </div>
            
            </div>

        </div>
          
     </div>


    );
};

export default Home;