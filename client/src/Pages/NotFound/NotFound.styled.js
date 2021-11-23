import styled from "styled-components";
import { Container } from '../../GlobalStyles/GlobalStyles'
import { Link } from 'react-router-dom'

export const NotFoundContainer = styled.div`
    background: rgb(156,18,56);
    background: linear-gradient(130deg, rgba(156,18,56,1) 0%, rgba(0,0,0,1) 100%);
    margin-bottom: 250px;
`

export const JustifyNotFound = styled(Container)`
    /* background: blue; */
    display: flex;
    flex-wrap: wrap;
    height: calc(100vh - 60px); //este es mientras no supere el height del contenido
`

export const BtnBack = styled.button`
    margin: 0 auto;
    width: 10rem;
    height: 3rem;
    font-size:1.5rem;
    background-color: #000000;
    color: #e0e0e0;
    border: none;
    border-radius: 1rem;

    &:hover{
        color: #ffffff;;
        cursor: pointer;
    }
`
export const NavLinks = styled(Link)`
    color: #e0e0e0;
    text-decoration: none;
    margin: 0 auto;

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