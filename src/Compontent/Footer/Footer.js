import React from 'react';
import './Footer.css'
import { assets } from '../../Assets/assets';

const Footer = () => {
    return (
        <div className='footer' id="footer">
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt=''/>
                <img src={assets.twitter_icon} alt=''/>
                <img src={assets.linkedin_icon} alt=''/>

               </div>
                </div>
                <div className='footer-content-center'>
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>

                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 3333333333</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className='footer-copyright'>copyright 2024 @ tomato.com -All Right Resrved</p>
        </div>
    )
}

export default Footer
