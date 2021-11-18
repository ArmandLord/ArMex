import { useEffect } from 'react'
import { getAllPlayers } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { SearchBar } from '../../components'

const Home = () => {
    const dispatch = useDispatch()
    const players = useSelector(state => state.renderingPlayers)   
    const playersSlice = players.slice(0, 10)

    useEffect(() => {
        dispatch(getAllPlayers())
    },[dispatch])

    return (
        <div>
            <SearchBar/>
           {
                playersSlice?.map(player => (
                <div key={player.id}>
                    <div ><Link to={`/player/${player.id}`}>{player.nickname}</Link></div>
                    <img src={player.avatar} alt="sda"/>                
                </div> ))
           }
        </div>
    )
}

export default Home
