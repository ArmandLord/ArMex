import { Link } from "react-router-dom";

const CardHome = ({ranking, id, nickname, status, avatar}) => {
    
    return (
        <div key={id}>
            <h2>{id}</h2>
            <h2>{ranking}</h2>
            <Link to={`/player/${id}`}><h2>{nickname}</h2></Link>
            <h2>{status}</h2>
            <img style={{width: '300px'}} src={avatar} alt="sda"/>
        </div>
    )
}

export default CardHome

