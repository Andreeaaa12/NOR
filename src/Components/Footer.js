import React from 'react';
import {SiLinkedin} from "react-icons/si";
import {FaFacebook} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logoImg from "../Landing Page Assets/2S2-alb-color.png";

const Footer = () => {
  return <div className='footer-wrapper'>
    <div className='footer-section-one'>
        <div className='footer-logo-container'>
            <img src={logoImg} width={388.83} height={133} alt="" />
        </div>

        <div className='footer-icons'>
            <h2 className='title'>Follow us on social-media</h2>
            <FaInstagram/>
            <SiLinkedin/>
            <FaFacebook/>
        </div>
    
    </div>

    <div className='footer-section-two'>

        <div className='footer-section-columns'>
            <h2 className='title'>Pages</h2>
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
            <span>Team</span>
        </div>

        <div className='footer-section-columns'>
            <h2 className='title'>Projects</h2>
            <span>Qube2Space</span>
            <span>Project Eva</span>
            <span>Project Luna</span>
        </div>

        <div className='footer-section-columns'>
            <h2 className='title'>Support</h2>
            <span>Support us</span>
            <span>Sponsors</span>
            <span>Vote responsibly</span>
        </div>
    </div>
  </div>
}

export default Footer