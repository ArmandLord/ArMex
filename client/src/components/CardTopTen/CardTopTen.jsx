import { CardHomeContainer, Avatar, LinkNickname } from './CardTopTen.styled'

const CardTopTen = ({ topTen }) => {
  return (
    <>
      {topTen.map((el, i) => (
        <CardHomeContainer status={el.status} key={el.id}>
          <Avatar src={el.avatar} alt={el.nickname} />
          <LinkNickname to={`/player/${el.id}`}>
            <h3>{el.nickname}</h3>
          </LinkNickname>
          <h4>Id Card: {el.id}</h4>
          <h4>Ranking: {el.ranking}</h4>
          <h4>Rarity: {el.status}</h4>
          <h2>{i+1}</h2>
        </CardHomeContainer>
      ))}
    </>
  );
};

export default CardTopTen;
