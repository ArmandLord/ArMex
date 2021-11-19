import { useEffect } from "react";
import { getAllPlayers } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar, FilteredStatus, CardHome } from "../../components";
import { HomeContainer, JustifyHome } from "./Home.styled";
import { useLocation } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.renderingPlayers);
  const loading = useSelector((state) => state.loading);
  const playersSlice = players?.slice(0, 10);
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(getAllPlayers());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <HomeContainer>
      <JustifyHome>
        <SearchBar />
        <FilteredStatus />
        {loading ? (
          <h1>Loading...</h1> //cambiar por componente
        ) : playersSlice.length !== 0 && !playersSlice.includes(null) ? (
          playersSlice.map((player, i) => (
            <CardHome
              key={player?.id}
              ranking={player?.ranking}
              id={player?.id}
              nickname={player?.nickname}
              status={player?.status}
              avatar={player?.avatar}
            />
          ))
        ) : (
          <div>Player not found</div> //cambiar por componente
        )}
      </JustifyHome>
    </HomeContainer>
  );
};

export default Home;
