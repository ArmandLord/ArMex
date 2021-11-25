import styled from "styled-components";
import { Container } from "../../GlobalStyles/GlobalStyles";

export const AboutContainer = styled.div`

  background: rgb(156, 18, 56);
  background: linear-gradient(
    130deg,
    rgba(156, 18, 56, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 250px;
`;


export const JustifyAbout = styled(Container)`
  display: flex;
  height: calc(100vh - 60px);
  justify-content: space-around;
  align-items: center;
  
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  @media (max-width: 900px) {
    &:hover{
      transform: scale(1);
    }
  }
`;

export const AboutText = styled.div`
  text-align: justify;
  border: 1px solid rgb(241, 243, 240);
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;
  flex-direction: column;
  padding: 2rem;
  @media (max-width: 900px) {
    overflow-y: scroll;
  }
`;

export const TitleAbout = styled.h2`
  color: white;
  font-size: 4rem;
  letter-spacing: 0.3rem;
  margin-bottom: 2.5rem;
  
  @media screen and (max-width: 670px) {
    font-size: 2rem;
  };

  @media screen and (max-width: 450px) {
    font-size: 1.8rem;
  }
`;




export const TextAbout = styled.p`
  height: 30rem;
  line-height: 2.5rem;
  color: white;
  padding: 0.2rem;
  transition: border 0.7s;
`;

