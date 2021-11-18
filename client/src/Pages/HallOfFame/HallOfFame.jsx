import { useEffect } from 'react'
import { getTopTen } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { CardTopTen } from '../../components'

const HallOfFame = () => {
    const dispatch = useDispatch()
    const topTen = useSelector(state => state.topTen)
    
    useEffect(() => {
        dispatch(getTopTen())
    }, [dispatch])

    return (
        <div>
            {
                topTen.length !== 0 ? (<CardTopTen topTen={topTen}/>) : (<div>Loading...</div>)
            }
        </div>
    )
}

export default HallOfFame
