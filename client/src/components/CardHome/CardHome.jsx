import { Link } from "react-router-dom";
import axios from "axios";
import { getAllPlayers } from "../../redux/actions";
import { useDispatch } from "react-redux";

const CardHome = ({ranking, id, nickname, status, avatar}) => {
    
    const dispatch = useDispatch();

    const handleDelete = async (id) => {
        await axios.delete(`/player/${id}`);
        dispatch(getAllPlayers());
    }
    

    return (
        <div key={id}>
            <button onClick={() => handleDelete(id)}>X</button>
            <h2>{id}</h2>
            <h2>{ranking}</h2>
            <Link to={`/player/${id}`}><h2>{nickname}</h2></Link>
            <h2>{status}</h2>
            <img style={{width: '300px'}} src={avatar} alt="sda"/>
        </div>
    )
}


export default CardHome;