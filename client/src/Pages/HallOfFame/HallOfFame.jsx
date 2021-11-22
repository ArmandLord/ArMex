import { useEffect } from "react";
import { getTopTen } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { CardTopTen } from "../../components";
import {
  HallOfFameContainer,
  JustifyHallOfFame,
  BackgroundImageTop,
} from "./HallOfFame.styled";
import { useLocation } from "react-router-dom";

const HallOfFame = () => {
  const dispatch = useDispatch();
  const topTen = useSelector((state) => state.topTen);
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(getTopTen());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <HallOfFameContainer>
      <BackgroundImageTop>
        <div>
          <h1>Hall of Fame</h1>
          <br />
          <p >
          The greatest football figures go to the World Cup and standing out in this event is not easy. Therefore, we created a hall of fame for those players with the highest ranking, because they deserve recognition. Congratulations to those privileged who are on this list.
          </p>
          <br />
          <a href="#topOne">Top N.1</a>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dy9tey0yi/image/upload/v1637369836/Futbol%20players/fama_ecjxsu.png"
            alt="equipo de jugadores"
          />
        </div>
      </BackgroundImageTop>
      <JustifyHallOfFame id='topOne'>
        {topTen.length !== 0 ? (
          <CardTopTen topTen={topTen} />
        ) : (
          <div>Loading...</div>
        )}
      </JustifyHallOfFame>
    </HallOfFameContainer>
  );
};

export default HallOfFame;
