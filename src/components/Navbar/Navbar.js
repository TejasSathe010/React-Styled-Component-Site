import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon,
NavMenu, NavItem, NavLinks } from './Navbar.styles';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon />
                        ULTRA
                    </NavLogo>
                    <MobileIcon
                        onClick={handleClick}>
                        { click ? <FaTimes /> : <FaBars /> }
                    </MobileIcon>
                    {/* Click={click} below is props */}
                    <NavMenu onClick={handleClick} click={click}> 
                        <NavItem>
                            <NavLinks to='/' onClick={closeMobileMenu}>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/services' onClick={closeMobileMenu}>
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/products' onClick={closeMobileMenu}>
                                Products
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
      </>
  );
};

export default Navbar;
