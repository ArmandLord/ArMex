import { useDispatch } from 'react-redux'
import { getFeat, getAllPlayers } from '../../redux/actions'
import { FilteredStatusSelect } from './FilteredStatus.styled'

const FilteredStatus = ({reset}) => {
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        if (e.target.value === 'all') {
            dispatch(getAllPlayers())
            reset(0, 12)
        } else {
            dispatch(getFeat(e.target.value))
            reset(0, 12)
        }
    }

    return (
        <>
           <FilteredStatusSelect onChange={handleChange}>
                <option value="all">All</option>
                <option value="oro">Oro</option>
                <option value="plata">Plata</option>
                <option value="bronce">Bronce</option>
           </FilteredStatusSelect>
        </>
    )
}

export default FilteredStatus
