import { useEffect } from "react";
import { getById, resetDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CardDetail } from "../../components";
import {
  PlayerDetailContainer,
  JustifyPlayerDetail,
  ContainerLoading,
} from "./PlayerDetail.styled";
import { useLocation } from 'react-router-dom'

const PlayerDetail = () => {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player);
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(getById(id));
    return function cleanup() {
      dispatch(resetDetail());
    };
  }, [id, dispatch]);

  return (
    <PlayerDetailContainer>
      <JustifyPlayerDetail>
        {!player.id ? (
          <ContainerLoading>
            <h2>Loading...</h2>
            <img
              src="https://gifimage.net/wp-content/uploads/2017/09/balon-de-futbol-gif-13.gif"
              alt="balón loading gif"
            />
          </ContainerLoading>
        ) : (
          <CardDetail player={player} />
        )}
      </JustifyPlayerDetail>
    </PlayerDetailContainer>
  );
};

export default PlayerDetail;
