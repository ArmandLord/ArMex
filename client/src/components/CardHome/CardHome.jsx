import axios from "axios";
import { getAllPlayers } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { CardHomeContainer, IconDelete, Avatar, LinkNickname } from './CardHome.styled';
import Swal from 'sweetalert2';


const CardHome = ({ranking, id, nickname, status, avatar}) => {
    
    const dispatch = useDispatch();

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This player will be removed!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, confirm',
            zIndex: "9999"
          }).then((result) => {
            if (result.isConfirmed) {
              axios.delete(`/player/${id}`)
              .then((result) => dispatch(getAllPlayers()));
              Swal.fire(
                'Done!',
                'The player has been removed from your catalogue',
                'success'
              )
            }
          })
    }
    

    return (
        <CardHomeContainer status={status} key={id}>
            <Avatar src={avatar} alt={nickname}/>
            <LinkNickname to={`/player/${id}`}><h3>{nickname}</h3></LinkNickname>
            <h4>Id Card: {id}</h4>
            <h4>Ranking: {ranking}</h4>
            <h4>Rarity: {status}</h4>
            <button onClick={() => handleDelete(id)}><IconDelete/></button>
        </CardHomeContainer>
    )
}


export default CardHome;