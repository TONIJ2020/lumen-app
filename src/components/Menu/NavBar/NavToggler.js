import React, { useState } from 'react';

import styled from 'styled-components';
import NavMenu from './NavMenu';

const Toggler = styled.div`
    cursor:pointer;

    @media only screen and (max-width: 768px) {
        width: 2rem;
        height: 2rem;
        position: fixed;
        top: 15px;
        right: 20px;
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        z-index: 4;

        div {
            width: 2rem;
            height: 0.25rem;
            background: ${({ open }) => open ? '#273043' : '#DADADA'};
            border-radius: 10px;
            transform-origin: 1px;
            transition: all 0.3s linear;

            &:nth-child(1) {
                transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
            }

            &:nth-child(2) {
                transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
                opacity: ${({ open }) => open ? 0 : 1};
            }

            &:nth-child(3) {
                transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
            }
        }
    }
`;

function NavToggler() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Toggler open={open} onClick={() => setOpen(!open)} className="toggleNav">
                <div />
                <div />
                <div />
            </Toggler>
            <NavMenu open={open}/>
        </>
    );
}

export default NavToggler;
