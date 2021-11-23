import axios from "axios";
import { getAllPlayers } from "../../redux/actions";
import { useDispatch } from "react-redux";
import {
  CardHomeContainer,
  IconDelete,
  Avatar,
  LinkNickname,
} from "./CardHome.styled";

const CardHome = ({ ranking, id, nickname, status, avatar }) => {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    await axios.delete(`/player/${id}`);
    dispatch(getAllPlayers());
  };

  return (
      <CardHomeContainer status={status} key={id}>
          <LinkNickname to={`/player/${id}`}>
        <Avatar src={avatar} alt={nickname} />
        <h3>{nickname}</h3>
        <h4>Id Card: {id}</h4>
        <h4>Ranking: {ranking}</h4>
        <h4>Rarity: {status}</h4>
    </LinkNickname>
        <button onClick={() => handleDelete(id)}>
          <IconDelete />
        </button>
      </CardHomeContainer>
  );
};

export default CardHome;
