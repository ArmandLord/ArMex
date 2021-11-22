import styled from "styled-components";
import { Container } from '../../GlobalStyles/GlobalStyles'

export const HallOfFameContainer = styled.div`
    background: rgb(156,18,56);
    background: linear-gradient(130deg, rgba(156,18,56,1) 0%, rgba(0,0,0,1) 100%);
    margin-bottom: 250px;
`

export const BackgroundImageTop = styled.div`
    /* background-image: url('https://res.cloudinary.com/dy9tey0yi/image/upload/v1637369836/Futbol%20players/fama_ecjxsu.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; */
    background: #000000;
    height: calc(100vh - 60px);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    h2{
        color: white;
        font-size: 6rem;
    }
    h5{
        color: white;
        font-size: 3rem;
    }
`

export const JustifyHallOfFame = styled(Container)`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    /* height: calc(100vh - 60px); //este es mientras no supere el height del contenido */
`