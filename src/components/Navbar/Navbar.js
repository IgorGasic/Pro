
import React, {useState} from 'react';
import slika from '../../imgs/NS.jpg'
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks} from './Navbar.styled';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)


    return (
        <> 
        <img src={slika} alt="slika" style={{width:"100%", marginBottom:"-5px", padding:"0px"}}/>
         <IconContext.Provider value={{color: "#666666"}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                      <NavIcon />
                        NS PRO UPRAVNIK ZGRADA
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>
                                Početna
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/galerija'>
                                Galerija
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/contact'>
                                Kontakt
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
         </IconContext.Provider>
        </>
    )
}

export default Navbar
