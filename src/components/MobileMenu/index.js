import React from "react";
import styled from "styled-components";
import { CloseButton, Link } from "../Navbar/NavElements";

const MobileContainer = styled.div`
    display: flex;
    position: fixed;

    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: #f8edeb;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    z-index: 1;

    a {
        flex-basis: 12%;
    }
`;

const FixedContainer = styled.div`
    position: fixed;
    height: 100%;
`;

const MobileMenu = ({ Toggle }) => {
    return (
        <>
            <FixedContainer>
                <MobileContainer>
                    <CloseButton onClick={Toggle} />
                    <Link>Home</Link>
                    <Link>About</Link>
                    <Link>Blog</Link>
                    <Link>Contact</Link>
                </MobileContainer>
            </FixedContainer>
        </>
    );
};

export default MobileMenu;
