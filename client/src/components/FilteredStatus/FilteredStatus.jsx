import { useDispatch } from 'react-redux'
import { getFeat, getAllPlayers } from '../../redux/actions'

const FilteredStatus = () => {
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        if (e.target.value === 'all') {
            dispatch(getAllPlayers())
        } else {
            dispatch(getFeat(e.target.value))
        }
    }

    return (
        <div>
           <select onChange={handleChange}>
                <option value="all">All</option>
                <option value="oro">Oro</option>
                <option value="plata">Plata</option>
                <option value="bronce">Bronce</option>
           </select>
        </div>
    )
}

export default FilteredStatus
