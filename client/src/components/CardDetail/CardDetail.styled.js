import { Link } from 'react-router-dom';
import styled from 'styled-components';

const oro = 'https://res.cloudinary.com/dy9tey0yi/image/upload/v1637340168/Futbol%20players/oro_ejgsih.jpg'
const plata = 'https://res.cloudinary.com/dy9tey0yi/image/upload/v1637340112/Futbol%20players/plata_gakeck.jpg'
const bronce = 'https://res.cloudinary.com/dy9tey0yi/image/upload/v1637340503/Futbol%20players/bronce_yogreu.jpg'


export const CardDetailContainer = styled.div`
    background-image: url(${status => status.status === 'oro' ? oro : status.status === 'plata' ? plata : bronce});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0 15px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    border-radius: 20px;
    width: 80%;
    height: 70%;
    display: flex;
    @media (max-width: 900px) {
        flex-direction: column;
        height: auto;
        margin: 2rem 0;
    }
    img{
        /* background: green; */
        width: 60%;
        height: 100%;
        @media (max-width: 900px) {
           width: 100%;
           height: 50%; 
        }
    }
`;

export const CardDetailContentInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(4px);
    border-left: 1px solid rgba(255,255,255,0.3);
    width: 40%;
    height: 100%;
    border-bottom-right-radius: 22px;
    border-top-right-radius: 22px;


    h2{
        font-size: 2rem;
        background: #000;
        border-radius: 10px;
        color: #fff;
        padding: 1rem;
        @media (max-width: 900px) {
            font-size: 1.2rem;
        }
    }

    h5{
        font-size: 1.3rem;
        @media (max-width: 900px) {
            font-size: 1rem;
        }
    }

    @media (max-width: 900px) {
           width: 100%;
           height: 50%; 
           padding: 2rem 0;
           border-radius: 22px;
        }
`;

export const LinkEdit = styled(Link)`
    text-decoration: none;
    border: 2px solid rgb(156, 18, 56);
    padding: 1rem;
    border-radius: 20px;
    cursor: pointer;
    color: #000;
    transition: all 0.8s ease;

    &:hover{
        background: rgb(156, 18, 56);
        color: #fff;
    }   

    @media (max-width: 900px) {
        padding: .3rem;
    }
`;