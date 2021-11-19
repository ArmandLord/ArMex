import styled from "styled-components";
import { Container } from '../../GlobalStyles/GlobalStyles'

export const AboutContainer = styled.div`
    background: red;
    margin-bottom: 250px;
`

export const JustifyAbout = styled(Container)`
    background: blue;
    display: flex;
    flex-wrap: wrap;
    height: calc(100vh - 60px); //este es mientras no supere el height del contenido
`