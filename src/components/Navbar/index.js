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
    Page,
} from "./NavElements";
import MobileMenu from "../MobileMenu";

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
                    {showMenu ? (
                        <MobileMenu Toggle={Toggle}></MobileMenu>
                    ) : null}
                </Navigation>
            </NavContainer>
            <Page></Page>
        </>
    );
};

export default Nav;
