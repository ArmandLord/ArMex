import {
  AboutContainer,
  JustifyAbout,
  TitleAbout,
  TextAbout,
} from "./About.styled";

const About = () => {
  return (
    <AboutContainer>
      <JustifyAbout>
        <TitleAbout>About ArMex</TitleAbout>
        <TextAbout>
          The Qatar World Cup is approaching and the whole planet is anxiously waiting
          for the event that transcends borders, countries, cultures and
          continents. We know that the wait is long so we designed a game where
          you can create your own player with your own nickname, where you can
          choose your favorite player and put it as an Avatar of any of the top
          figures in the Qatar 2022 World Cup. Also, among other features, you
          can edit the user you want and also delete them. Other functionalities
          that stand out in the game is that you can filter users by status,
          whether they are gold, silver or bronze. And finally, we want to
          highlight the search bar where you can search for the user you want
          both by ID, nickname or status. In this way, finding the user you are
          looking for is much easier. As we know, in the world cup there are
          always players who stand out above the rest, and deserve recognition,
          therefore, we decided to make a hall of fame where the top 10 of the
          users with the best ranking is. It is always important to recognize
          those who with effort and dedication stand out and deserve such fame.
          I hope you enjoy the experience of navigating this game, our greatest
          wish is that the wait for Qatar 2022 is as pleasant as possible. Start
          playing and have fun!
        </TextAbout>
      </JustifyAbout>
    </AboutContainer>
  );
};

export default About;
