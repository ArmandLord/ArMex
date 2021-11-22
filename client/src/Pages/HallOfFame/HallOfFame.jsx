import { useEffect } from 'react'
import { getTopTen } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { CardTopTen } from '../../components'
import { HallOfFameContainer, JustifyHallOfFame, BackgroundImageTop } from './HallOfFame.styled'

const HallOfFame = () => {
    const dispatch = useDispatch()
    const topTen = useSelector(state => state.topTen)
    
    useEffect(() => {
        dispatch(getTopTen())
    }, [dispatch])

    return (
        <HallOfFameContainer>
            <BackgroundImageTop>
                <h2>Salon de la fama</h2>
                <h5>Descubre nuestro jugadores mejor calificados por la comunidad.</h5>
            </BackgroundImageTop>
            <JustifyHallOfFame>
                {
                    topTen.length !== 0 ? (<CardTopTen topTen={topTen}/>) : (<div>Loading...</div>)
                }
            </JustifyHallOfFame>
        </HallOfFameContainer>
    )
}

export default HallOfFame
