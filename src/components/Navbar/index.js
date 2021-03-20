import React, { useState } from "react";
import {
    NavContainer,
    LogoContainer,
    Logo,
    LogoText,
    Navigation,
    LinkContainer,
    Link,
    ToggleContainer,
    ToggleIcon,
    MobileMenu,
    CloseButton,
} from "./NavElements";

const Nav = () => {
    const [showMenu, setshowMenu] = useState(false);

    const Toggle = () => {
        setshowMenu(!showMenu);
    };

    return (
        <>
            <NavContainer>
                <LogoContainer>
                    <Link>
                        <Logo />
                    </Link>
                    <Link>
                        <LogoText>Company</LogoText>
                    </Link>
                </LogoContainer>
                <Navigation>
                    <LinkContainer>
                        <Link>Home</Link>

                        <Link>About</Link>

                        <Link>Blog</Link>

                        <Link>Contact</Link>
                    </LinkContainer>
                    <ToggleContainer>
                        <ToggleIcon onClick={Toggle} />
                    </ToggleContainer>
                    <MobileMenu id={showMenu ? "mobile" : null}>
                        <CloseButton onClick={Toggle} />

                        <Link>Home</Link>

                        <Link>About</Link>

                        <Link>Blog</Link>

                        <Link>Contact</Link>
                    </MobileMenu>
                </Navigation>
            </NavContainer>
        </>
    );
};

export default Nav;
