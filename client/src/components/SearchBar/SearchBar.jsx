import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getFeat, getAllPlayers } from '../../redux/actions'
import { SearchBarContainer, SearchIcon, ButtonRefresh } from './SearchBar.styled'

const SearchBar = ({reset}) => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch('')
        dispatch(getFeat(search))
        reset(0, 12)   
    }
    
    const handleClick = () => {
        dispatch(getAllPlayers())
        reset(0, 12)   
    }

    return (
        <>
            <SearchBarContainer onSubmit={handleSubmit}>
                <button type="submit"><SearchIcon/></button>
                <input placeholder='Search' onChange={handleChange} value={search} type="text" />
            </SearchBarContainer>
            <ButtonRefresh onClick={handleClick}>Refresh</ButtonRefresh>
        </>
    )
}

export default SearchBar
