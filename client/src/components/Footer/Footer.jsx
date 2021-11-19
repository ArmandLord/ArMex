import {
  ContainerFooter,
  FooterMin,
  Icon,
  // IconLink,
  IconGitHub,
  ContainerIcons,
  IconInstagram,
  // IconLinkedIn,
  // IconEmail,
} from "./Footer.styled";

const Footer = () => {
  return (
    <ContainerFooter>
      <FooterMin>
        <h2>Contáctanos</h2>
        <ContainerIcons>
          <Icon
            rel="noreferrer"
            href="https://github.com/ArmandLord/ArMex"
            target="blank"
          >
            <IconGitHub />
          </Icon>
          {/* <Icon
            rel="noreferrer"
            href="https://www.linkedin.com/in/jos%C3%A9-armando-p%C3%A9rez/"
            target="blank"
          >
            <IconLinkedIn />
          </Icon> */}
          {/* <IconLink to="/contact">
            <IconEmail />
          </IconLink> */}
          <Icon
            rel="noreferrer"
            href="https://instagram.com/team_armex?utm_medium=copy_link"
            target="blank"
          >
            <IconInstagram />
          </Icon>
        </ContainerIcons>

        <small>Copyright © 2021 ArMex. Diseño by team ArMex</small>
      </FooterMin>
    </ContainerFooter>
  );
};

export default Footer;
