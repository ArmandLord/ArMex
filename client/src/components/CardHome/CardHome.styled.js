import styled from "styled-components";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const oro = 'https://res.cloudinary.com/dy9tey0yi/image/upload/v1637340168/Futbol%20players/oro_ejgsih.jpg'
const plata = 'https://res.cloudinary.com/dy9tey0yi/image/upload/v1637340112/Futbol%20players/plata_gakeck.jpg'
const bronce = 'https://res.cloudinary.com/dy9tey0yi/image/upload/v1637340503/Futbol%20players/bronce_yogreu.jpg'

export const CardHomeContainer = styled.div`
    background-image: url(${status => status.status === 'oro' ? oro : status.status === 'plata' ? plata : bronce});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border-top-left-radius: 50%; */
    border-radius: 20px;
    margin-right: 15px;
    margin-top: 20px;
    box-shadow: 0 15px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    position: relative;
    z-index: 1;
    transition: all 0.3s ease-in-out;

    &:hover{
        transform: scale(1.05);
    }

    button{
        background: #000;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 2%;
        left: 83%;
        cursor: pointer;
        z-index: 99 !important;
    }


    @media (max-width: 590px) {
        width: 95%;
        margin-right: 0;
    }
`

export const Avatar = styled.img`
    width: 100%;
`

export const LinkNickname = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

export const IconDelete = styled(AiTwotoneDelete)`
    font-size: 1.2rem;
    color: #fff;
    &:hover{
        color: red;
    }
`