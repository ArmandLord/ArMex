import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '../../GlobalStyles/GlobalStyles'

export const EditFContainer = styled.div`
    background: red;
    margin-bottom: 250px;
`

export const JustifyEditF = styled(Container)`
    background: blue;
    display: flex;
    flex-wrap: wrap;
    height: calc(100vh - 60px); //este es mientras no supere el height del contenido
`

export const HomeLink = styled(Link)`
    background-color: rgba(255, 255, 255, 0.61);
    color: #fff;
    /* justify-self: flex-start; */
    cursor: pointer;
    text-decoration: none;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    border-radius: 0.5rem;
    
    @media screen and (max-width: 960px){
        font-size: .7rem;
    } 
    &:hover{
        /*  Buscar más!! filter: blur(1px); */
    }
`

export const FormContainer = styled(Container)`
    display: flex;

    ${Container}
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 2rem;
  background: #222831;
  padding: 5rem;
`;

export const FormInput = styled.input`
  width: 68%;
  height: 90%;
`;

export const FormButton = styled.button`
    background-color: rgba(255, 255, 255, 0.61);
    border-radius: 0.5rem;
    cursor: pointer; 
    font-weight: 600;
    width: 6rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    color: rgba(245, 245, 245, 0.849);
`;

export const FormCheck = styled.label`
    display: flex;
    justify-content: space-between;
    margin-top: 2em;
    margin-bottom: 0.1em;

`;

export const OptgroupForm = styled.optgroup`
    font-family: 'Merriweather', serif;
    font-weight: bolder;
    background: rgba(255, 255, 255, 0.178);
`;

export const ErrorForm = styled.p`
    color: red;
    display: flex;
    margin-top: 0.1rem;
    font-size: 14px;
`;

export const ImageCheck = styled.img`
    width: 3rem;
    height: 3rem
`