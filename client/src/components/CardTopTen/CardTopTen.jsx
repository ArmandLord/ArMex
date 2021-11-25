import { CardHomeContainer, Avatar, LinkNickname } from "./CardTopTen.styled";

const CardTopTen = ({ topTen }) => {
  return (
    <>
      {topTen.map((el, i) => (
        <LinkNickname to={`/player/${el.id}`} key={el.id} >
          <CardHomeContainer status={el.status} >
            <Avatar src={el.avatar} alt={el.nickname} />
            <h3>{el.nickname}</h3>
            <h4>Id Card: {el.id}</h4>
            <h4>Ranking: {el.ranking}</h4>
            <h4>Rarity: {el.status}</h4>
            <h2>{i + 1}</h2>
          </CardHomeContainer>
        </LinkNickname>
      ))}
    </>
  );
};

export default CardTopTen;
