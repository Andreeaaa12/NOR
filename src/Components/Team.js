import React from 'react'

import bannerImage from "../Landing Page Assets/imagine3-eva.png";


const Team = () => {
    return(

        <div className="nor-team-container">

   
           <div class="nor-wrapper">
               <div className="nor-home-image-container">
                   <div className="nor-team-wrap ">
                        <img src={bannerImage} alt="" />
                   </div>
               </div>
               <div class="nor-text-box">
                   <h1 className="nor-secondary-heading">How it </h1>
                   <h1 className="nor-secondary-heading-gradient">started</h1>
                   <div className="nor-align-icon-paragraph">
                           
                       <div className="nor-text-content">
                           <p className="nor-paragraph-small">Project NOR is the third project of the 2SPACE Team, aiming to deliver superior outcomes post-launch. It is going to be launched at the SpacePort America Cup 2024, in New Mexico and it is entirely manufactured by the team. Its main objective is to serve as a testing ground, encompassing all the accumulated knowledge. It has a vacuum chamber as a payload, new airbrakes system, and it will reach 30000 ft at 2.05 Mach.</p>
                       </div>
                   </div>
                   <h1 className="nor-secondary-heading">About</h1>
                   <h1 className="nor-secondary-heading-gradient">Spaceport America</h1>
                   <h1 className="nor-secondary-heading">Cup</h1>
                   <div className="nor-align-icon-paragraph">
                           
                       <div className="nor-text-content">
                           <p className="nor-paragraph-small">The Spaceport America Cup is the world’s largest IREC – Intercollegiate Rocket Engineering Competition for student rocketry teams, with over 140 teams from colleges and universities in 32 countries.
We’re the first Romanian team of students & engineers that got accepted at the Spaceport America Cup. We are proud that we were one of the 158 teams that were selected in 2023, becoming the first Romanian students team to ever launch on USA soil.</p>
                       </div>
                   </div>
                   
               
               </div>
   
           </div>
             
        </div>
   
   
       );

  
}

export default Team;