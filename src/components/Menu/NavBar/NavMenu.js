import React from 'react';

import styled from 'styled-components';
import '../../../Styles/NavBar.css';

const Ul = styled.div`
    z-index: 2;
    @media only screen and (max-width:768px) {
        flex-flow: column nowrap;
        background-color: #eee;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0px;
        right: 0px;
        height: 260px;
        width: 170px;
        padding-top: 2rem;
        transition: transform 0.3s ease-in-out;

        .navigation-bar-home, 
        .navigation-bar-dashboard,
        .navigation-bar-projects, 
        .navigation-bar-about, 
        .navigation-bar-contact, 
        .navigation-bar-faq, 
        .navigation-bar-sign-in,
        .navigation-bar-sign-up {
            color: #007bff;
            margin-left: 20px;
        }
    }
`;

const handleLogout = () => {
    localStorage.clear();
    this.props.setUser(null);
};

function NavMenu({open}) {
    let buttons;

    if (localStorage.getItem('userData')) {
        buttons = ( <Ul open={open} className="navigation-bar-ul">
                <li><a href="/" className="navigation-bar-home">Home</a></li>
                <li><a href="/projects" className="navigation-bar-about">Projects</a></li>
                <li><a href="/about" className="navigation-bar-projects">About Us</a></li>
                <li><a href="/home/#send-message" className="navigation-bar-contact">Contacts</a></li>
                {/* <li><a href="/faq" className="navigation-bar-faq">FAQ</a></li> */}
                <li><a href = "/login"
                className = "navigation-bar-log-in"
                onClick = { handleLogout } > Logout </a></li>
            </Ul>
            )
    }else {
            buttons = ( <Ul open={open} className="navigation-bar-ul">
                <li><a href="/" className="navigation-bar-home">Home</a></li>
                <li><a href="/projects" className="navigation-bar-about">Projects</a></li>
                <li><a href="/about" className="navigation-bar-projects">About Us</a></li>
                <li><a href="/home/#send-message" className="navigation-bar-contact">Contacts</a></li>
                {/* <li><a href="/faq" className="navigation-bar-faq">FAQ</a></li> */}
                <li><a href="/login" className="navigation-bar-sign-in">Sign-In</a></li>
                <li><a href="/register" className="navigation-bar-sign-up">Register</a></li>
            </Ul>
            )
        }
        
    return (
        <nav className="navigation-bar">
            { buttons }
        </nav>
    );
}

export default NavMenu;
