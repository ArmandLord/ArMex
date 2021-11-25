import styled from "styled-components";
import { Container } from '../../GlobalStyles/GlobalStyles'

export const PlayerDetailContainer = styled.div`
    background: rgb(156,18,56);
    background: linear-gradient(130deg, rgba(156,18,56,1) 0%, rgba(0,0,0,1) 100%);
    margin-bottom: 250px;
`

export const JustifyPlayerDetail = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 60px); //este es mientras no supere el height del contenido
`

export const ContainerLoading = styled.div`
    height: calc(100vh - 60px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2{
        font-size: 2rem;
        color: #fff;
    }
`