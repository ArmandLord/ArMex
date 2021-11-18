

const CardDetail = ({player}) => {
    return (
        <div>
           <h1>{player.nickname}</h1>
           <h5>{player.status}</h5>
           <h5>{player.ranking}</h5>
           <img src={player.avatar} alt="sda"/>

        </div>
    )
}

export default CardDetail
