import React from 'react';

import facebook from '../../Assets/facebook..png';
import twitter from '../../Assets/twitter..png';
import instagram from '../../Assets/instagram..png';
import linkedIn from '../../Assets/linkedin..png';
import youtube from '../../Assets/youtube..png';
import '../../Styles/Footer.css';

function Footer() {
    return (
        <div className="footer-main-div" >

            {/* <p className="lumen-city-estate-pride-text">Lumen-City Estate prides in being a collaborative effort of all the arms of our construction team</p> */}

            <p className="footer-office-address">Our Head Office: Suite S2, Alibro Atrium, Utako, Abuja FCT-Nigeria.</p>

            <div className="social-icons">
                <a href="/twitter" ><img src={twitter} className="twitter" alt="twitter" /></a>
                <a href="/facebook" ><img src={facebook} className="facebook" alt="facebook" /></a>
                <a href="/linkedin" ><img src={linkedIn} className="linkedin" alt="linkedin" /></a>
                <a href="/instagram" ><img src={instagram} className="instagram" alt="instagram" /></a>
                <a href="/youtube" ><img src={youtube} className="youtube" alt="youtube" /></a>
            </div>

            <ul className="footer-list-items">
                <li className="footer-list-item"><a className="footer-site-locations" href="/projects/locations">Site Locations</a></li>

                <li className="footer-list-item"><a className="footer-faq" href="/about">About</a></li>

                <li className="footer-list-item"><a className="footer-reach-us" href="/home/#send-message">Reach Us</a></li>

                <li className="footer-list-item"><a className="footer-about" href="/faq">FAQ</a></li>
            </ul>

            <div className="copyright-div">
                <div className="privacy-div">
                    <span href="/copyright" className="copyright-text">&#169; Lumen-Deo 2021</span><hr /><a href="/privacy-statement" className="privacy-statement">Privacy Statement</a>
                </div>
                <h2 className="incorporation-number">RC-1347939</h2>
            </div>            
        </div>
    );
}

export default Footer;
