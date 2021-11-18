import { useEffect } from "react";
import { getAllPlayers } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar, FilteredStatus, CardHome } from "../../components";

const Home = () => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.renderingPlayers);
  const loading = useSelector((state) => state.loading);
  const playersSlice = players?.slice(0, 10);

  useEffect(() => {
    dispatch(getAllPlayers());
  }, [dispatch]);

  return (
    <div>
      <SearchBar />
      <FilteredStatus />
      {loading ? (
        <h1>Loading...</h1>
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
        <div>Player not found</div>
      )}
    </div>
  );
};

export default Home;
