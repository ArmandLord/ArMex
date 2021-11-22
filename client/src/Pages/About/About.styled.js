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
  padding: 2rem;
  margin-bottom: 250px;
`;

export const JustifyAbout = styled(Container)`
  display: flex;
  height: calc(
    100vh - 60px
  ); //este es mientras no supere el height del contenido
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 650px) {
    overflow-y: scroll;
  }
`;

export const TitleAbout = styled.h2`
  font-size: 4rem;
  letter-spacing: 0.3rem;
  line-height: 2rem;
  margin-bottom: 2.5rem;
  padding: 1rem;
  color: black;
  transition: color 0.7s;
  &:hover {
    color: white;
  }

  @media screen and (max-width: 670px) {
    font-size: 2rem;
    margin-bottom: -4rem;
  };

  @media screen and (max-width: 450px) {
    font-size: 1.8rem;
    margin-bottom: -4rem;
  }
`;

export const TextAbout = styled.p`
  height: 30rem;
  line-height: 2.5rem;
  color: white;
  padding: 0.2rem;
  transition: border 0.7s;
`;
