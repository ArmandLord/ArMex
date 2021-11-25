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
                <option value="oro">Gold</option>
                <option value="plata">Silver</option>
                <option value="bronce">Bronze</option>
           </FilteredStatusSelect>
        </>
    )
}

export default FilteredStatus
