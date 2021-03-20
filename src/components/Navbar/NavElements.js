import styled from "styled-components";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export const NavContainer = styled.nav`
    display: flex;
    width: 100%;
    height: 100px;
    background-color: #f8edeb;
    justify-content: space-between;
    align-items: center;
    position: relative;
`;

export const LogoContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const Logo = styled(FaHamburger)`
    font-size: 25px;
    margin: 0 10px 0 10px;
    color: #fec5bb;
    @media only screen and (min-width: 768px) {
        font-size: 40px;
    }
`;

export const LogoText = styled.h1`
    font-size: 25px;

    @media only screen and (min-width: 768px) {
        font-size: 40px;
    }
`;

export const Navigation = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    #mobile {
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
        a {
            flex-basis: 12%;
        }
    }
`;

export const LinkContainer = styled.div`
    display: none;

    @media only screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        a {
            margin-right: 25px;
        }
        a:last-child {
            margin-right: 50px;
        }
    }
`;

export const Link = styled.a`
    text-decoration: none;
    font-size: 25px;
    display: inline-block;
    /* margin-right: 20px; */
`;

export const ToggleContainer = styled.div`
    display: flex;
    margin-right: 20px;
    cursor: pointer;
    @media only screen and (min-width: 768px) {
        display: none;
    }
`;

export const ToggleIcon = styled(GiHamburgerMenu)`
    font-size: 27px;
    cursor: pointer;
`;

export const MobileMenu = styled.div`
    display: none;
`;

export const CloseButton = styled(AiOutlineClose)`
    font-size: 40px;
    position: absolute;
    top: 3%;
    right: 3%;
`;
