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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            repellendus ipsa assumenda mollitia et provident excepturi explicabo
            optio, perferendis libero. Dignissimos nesciunt harum porro iusto
            mollitia voluptatum rerum illo natus.
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
