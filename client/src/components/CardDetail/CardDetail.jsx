import { Link } from 'react-router-dom'

const CardDetail = ({player}) => {
    return (
        <div>
           <h1>{player.nickname}</h1>
           <h5>{player.status}</h5>
           <h5>{player.ranking}</h5>
           <img style={{width: '300px'}} src={player.avatar} alt="sda"/>
           <Link to={`/editPlayer/${player.id}`}><h2>Edit Player</h2></Link>
        </div>
    )
}

export default CardDetail
