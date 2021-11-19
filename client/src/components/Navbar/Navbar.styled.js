import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '../../GlobalStyles/GlobalStyles'
import { FaFutbol, FaTimes } from 'react-icons/fa'

export const Nav = styled.div`
    background: #000000;
    width: 100%;
    height: 60px;
    font-size: 1.1rem;
    position: sticky;
    top: 0;
    z-index: 999;
`

export const NavbarContainer = styled(Container)`
    display: flex;

    ${Container}
`

export const NavLogo = styled(Link)`
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    width: 20%;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.3rem; 
        cursor: pointer;

    }  
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    text-align: center;
    width: 80%;
    

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 60px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: transparent;
        backdrop-filter: blur(8px);
    }
`

export const NavItem = styled.li`
    margin-left: 2.5rem;
    text-align: center;

    @media screen and (max-width: 960px) {
        width: 100%;
        margin-top: 40px;
        margin-left: 0;
    }
`

export const NavLinks = styled(Link)`
    color: #e0e0e0;
    text-decoration: none;

    &:hover{
        color: #ffffff;
    }

    @media screen and (max-width: 960px) {
        text-align: center;
        text-transform: uppercase;
        padding: 2rem;
        width: 100%;
        display: table;
    }
 `

 export const MenuFootIcon = styled(FaFutbol)`
    color: #ffffff;
    font-size: 1.5rem;
 `

 export const MenuXIcon = styled(FaTimes)`
    color: #ffffff;
    font-size: 1.5rem;
 `