import styled from "styled-components";
import { Container } from '../../GlobalStyles/GlobalStyles'

export const AboutContainer = styled.div`
    /* background: red; */
    background: rgb(156,18,56);
    background: linear-gradient(130deg, rgba(156,18,56,1) 0%, rgba(0,0,0,1) 100%);
    margin-bottom: 250px;
`

export const JustifyAbout = styled(Container)`
    /* background: blue; */
    display: flex;
    flex-wrap: wrap;
    height: calc(100vh - 60px); //este es mientras no supere el height del contenido
`