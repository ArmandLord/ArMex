import { useEffect } from 'react'
import { getTopTen } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { CardTopTen } from '../../components'
import { HallOfFameContainer, JustifyHallOfFame } from './HallOfFame.styled'

const HallOfFame = () => {
    const dispatch = useDispatch()
    const topTen = useSelector(state => state.topTen)
    
    useEffect(() => {
        dispatch(getTopTen())
    }, [dispatch])

    return (
        <HallOfFameContainer>
            <JustifyHallOfFame>
                {
                    topTen.length !== 0 ? (<CardTopTen topTen={topTen}/>) : (<div>Loading...</div>)
                }
            </JustifyHallOfFame>
        </HallOfFameContainer>
    )
}

export default HallOfFame
