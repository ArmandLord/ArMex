import { CardDetailContainer, CardDetailContentInfo, LinkEdit } from './CardDetail.styled'

const CardDetail = ({player}) => {
    return (
        <CardDetailContainer status={player.status} >
           <img src={player.avatar} alt="sda"/>
           <CardDetailContentInfo>
            <h2>{player.nickname}</h2>
            <h5>Status: {player.status}</h5>
            <h5>Ranking: {player.ranking}</h5>
            <h5>Id: {player.id}</h5>
            <LinkEdit to={`/editPlayer/${player.id}`}><h3>Edit Player</h3></LinkEdit>
           </CardDetailContentInfo>
        </CardDetailContainer >
    )
}

export default CardDetail
