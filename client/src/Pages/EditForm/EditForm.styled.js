import styled from 'styled-components'
import { Container } from '../../GlobalStyles/GlobalStyles'

export const EditFContainer = styled.div`
    height: 95vh;
    background: rgb(156,18,56);
    background: linear-gradient(130deg, rgba(156,18,56,1) 0%, rgba(0,0,0,1) 100%);
    margin-bottom: 250px;
    padding: .5rem 0;
    @media screen and (max-width: 960px){
        height: auto;
        padding: .5rem 0;
    }
`

export const JustifyEditF = styled(Container)`
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
  height: 580px;
  margin: 0 auto;
  background: rgb(156,18,56);
  background: linear-gradient(130deg, rgba(156,18,56,1) 0%, rgba(0,0,0,1) 100%);
  padding: 4rem 3rem;
  border: 1px solid rgb(241, 243, 240);
  border-radius:1rem;
  @media screen and (max-width: 960px){
      height: auto;
  }
`;

export const FormInput = styled.input`
width: 100%;
  height: 2rem;
  margin-bottom: 0.2rem;
  transition: background 0.9s;
  border-radius: 0.3rem;
  outline: none;
  background: transparent;
  color: white;
  border: 1px solid rgb(241, 243, 240);
  :hover {
      background: black;
      color: white;

  }
  ::placeholder {
      color: white;
  }
`;

export const FormButton = styled.button`
    background-color: #0f0f0f;
    border-radius: 1rem;
    cursor: pointer; 
    font-weight: 600;
    width: 5rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    border: none;
    color: #e0e0e0;
    margin-top: 1rem;
    transition: all 0.3s ease-in-out;
    :hover {
        background-color: green;
        color: white;
        transform: scale(1.1);
        font-size: 1.2rem;

    }

    @media screen and (max-width: 414px) {
        background-color: green;
        color: white;
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
    height: 3.2rem
`;

export const StatusLabel = styled.label`
    margin: 0 4rem;
`;

export const AvatarLabel = styled.label`
    margin: 0 0.5rem;
`;