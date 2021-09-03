import React from 'react';

import '../../../Styles/NavBar.css';
import Logo from './logo512.png';
import NavToggler from './NavToggler';

function NavBar() {
    return (
        <div className="main-navigation-div">
            <a href="/home" className="navigation-bar-logo-li"><img src={Logo} alt="" 
            className="navigation-bar-logo"/>
                <div className="company-name">
                <b className="navigation-bar-lumen">LUMEN-DEO</b><strong className="navigation-bar-realties">REALTIES AND CONSTRUCTIONS LTD</strong>
                </div>
            </a>
            <NavToggler /> 
        </div>
    );
}

export default NavBar;
