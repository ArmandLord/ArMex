import styled from "styled-components";
import { Container } from '../../GlobalStyles/GlobalStyles'

export const HallOfFameContainer = styled.div`
    background: rgb(156,18,56);
    background: linear-gradient(130deg, rgba(156,18,56,1) 0%, rgba(0,0,0,1) 100%);
    margin-bottom: 250px;
    
`

export const BackgroundImageTop = styled.div`
    background: #000000;
    height: calc(100vh - 60px);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (max-width: 960px){
        flex-direction: column;
    }
    div {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        @media screen and (max-width: 960px){
            width: 100%;
            height: 50%;
        }

        h1{
            color: #fff;
            font-size: 6vw;
        }
        p{
            text-align: center;
            color: #fff;
            padding: 0 20px;
            font-size: 1.2rem;
            @media screen and (max-width: 960px){
                font-size: 1rem;
            }
        }
        a{
            background: #fff;
            text-decoration: none;
            color: #000;
            padding: .7rem;
            border-top-left-radius: 2rem;
            border-bottom-left-radius: 2rem;
            border-bottom-right-radius: 2rem;
        }
        img{
            width: 100%;
        }
    }

    h2{
        color: white;
        font-size: 6rem;
    }
    h5{
        color: white;
        font-size: 3rem;
    }
    @media (max-width: 450px) {
  
  padding: 1rem;
}
`

export const JustifyHallOfFame = styled(Container)`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    /* height: calc(100vh - 60px); //este es mientras no supere el height del contenido */
`