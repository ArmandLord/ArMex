import { useEffect } from "react";
import { getAllPlayers } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar, FilteredStatus, CardHome } from "../../components";
import { ContainerCards, ContainerSearch, HomeContainer, JustifyHome } from "./Home.styled";
import { useLocation } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.renderingPlayers);
  const loading = useSelector((state) => state.loading);
  console.log(players);
  const playersSlice = players?.slice(0, 12);
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
        <ContainerSearch>
          <SearchBar />
          <FilteredStatus />
        </ContainerSearch>
        <ContainerCards>
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
        </ContainerCards>
      </JustifyHome>
    </HomeContainer>
  );
};

export default Home;
