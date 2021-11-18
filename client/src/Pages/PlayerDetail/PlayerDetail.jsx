import { useEffect } from 'react'
import { getById } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { CardDetail } from '../../components'

const PlayerDetail = () => {
    const dispatch = useDispatch()
    const player = useSelector(state => state.player)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getById(id))
    },[id, dispatch])

    return (
        <div>
            {
                !player.id ? (<div>Loading...</div>) : (<CardDetail player={player}/>)
            }
        </div>
    )
}

export default PlayerDetail
