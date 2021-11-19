import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getFeat, getAllPlayers } from '../../redux/actions'
import { SearchBarContainer, SearchIcon } from './SearchBar.styled'

const SearchBar = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch('')
        dispatch(getFeat(search))
    }

    const handleClick = () => {
        dispatch(getAllPlayers())
    }

    return (
        <>
            <SearchBarContainer onSubmit={handleSubmit}>
                <button type="submit"><SearchIcon/></button>
                <input placeholder='Search' onChange={handleChange} value={search} type="text" />
            </SearchBarContainer>
            <button onClick={handleClick}>refresh</button>
        </>
    )
}

export default SearchBar
