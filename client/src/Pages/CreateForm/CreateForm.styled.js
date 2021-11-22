import styled from 'styled-components'
import { Container } from '../../GlobalStyles/GlobalStyles'

export const CreateFContainer = styled.div`
    height: calc(100vh - 60px);
    background: rgb(156,18,56);
    background: linear-gradient(130deg, rgba(156,18,56,1) 0%, rgba(0,0,0,1) 100%);
    margin-bottom: 250px;
    @media screen and (max-width: 960px){
        height: 100%;
        padding: .5rem 0;
    }
`

export const JustifyCreateF = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
`


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80%;
  margin: 0 auto;
  background: rgb(156,18,56);
  background: linear-gradient(130deg, rgba(156,18,56,1) 0%, rgba(0,0,0,1) 100%);
  padding: 3rem;
  border: 1px solid rgb(241, 243, 240);
  @media screen and (max-width: 960px){
      height: 100vh;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  height: 2rem;
  margin-bottom: 0.2rem;
  transition: background 0.9s;
  border-radius: 0.3rem;
  outline: none;
  :hover {
      background: black;
      color: white;
  }
`;

export const FormButton = styled.button`
    background-color: rgb(241, 243, 240);
    border-radius: 0.5rem;
    cursor: pointer; 
    font-weight: 600;
    width: 5rem;
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    color: black;
    margin-top: 1rem;
    transition: background-color 0.5s, color 0.5s;
    :hover {
        background-color: black;
        color: rgb(241, 243, 240);
    }
`;

export const FormCheck = styled.label`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    color: rgb(241, 243, 240);
`;

export const OptgroupForm = styled.optgroup`
    font-family: 'Merriweather', serif;
    font-weight: bolder;
    background: rgba(255, 255, 255, 0.178);
`;

export const ErrorForm = styled.p`
    color: rgb(241, 243, 240);
    display: flex;
    font-size: 14px;
    margin-bottom: 0.6rem;
`;

export const ImageCheck = styled.img`
    width: 3rem;
    height: 3.2rem;
`;

export const StatusLabel = styled.label`
    margin: 0 1.5rem;
`;

export const AvatarLabel = styled.label`
    margin: 0 0.5rem;
`;