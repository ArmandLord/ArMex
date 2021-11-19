import { useEffect } from 'react'
import { getById } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { CardDetail } from '../../components'
import { PlayerDetailContainer, JustifyPlayerDetail } from './PlayerDetail.styled'

const PlayerDetail = () => {
    const dispatch = useDispatch()
    const player = useSelector(state => state.player)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getById(id))
    },[id, dispatch])

    return (
        <PlayerDetailContainer>
            <JustifyPlayerDetail>
            {
                !player.id ? (<div>Loading...</div>) : (<CardDetail player={player}/>)
            }
            </JustifyPlayerDetail>
        </PlayerDetailContainer>
    )
}

export default PlayerDetail
