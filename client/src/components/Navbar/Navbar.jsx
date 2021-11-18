import React, { useState } from 'react'
import { FaHamburger, FaTimes } from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    // NavIconLeft,
    // NavIconRight,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavHr,
    // NavItemBtn,
    // NavItemBtnIcon1
 } from './Navbar.styled'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [logo, setLogo] = useState(true)

    const handleClick = () => setClick(!click)
    return (
        <>
           <Nav>
                <NavbarContainer>
                    {/* {logo ? */}
                        <NavLogo to='/' onMouseOver={() => setLogo(!logo)} onMouseOut={() => setLogo(true)}>
                            ArMex
                        </NavLogo> 
                        {/* : 
                        <NavLogo to='/' onMouseOver={() => setLogo(!logo)} onMouseOut={() => setLogo(true)} >
                             Armando Pérez Pérez
                        </NavLogo>
                        } */}
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes style={{color: 'red'}}/> : <FaHamburger style={{color: 'red'}}/>}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>Home<NavHr/></NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/hallOfFame'>Hall Of Fame<NavHr/></NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/createPlayer'>Create Player<NavHr/></NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/About'>about<NavHr/></NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to='/projects'>Proyectos<NavHr/></NavLinks>
                        </NavItem> */}
                        {/* <NavItemBtn onClick={() => setTheme(!theme) }><NavItemBtnIcon1/></NavItemBtn> */}
                    </NavMenu>
                </NavbarContainer>   
           </Nav> 
        </>
    )
}

export default Navbar
