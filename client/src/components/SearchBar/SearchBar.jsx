import { FcSearch } from 'react-icons/fc'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getFeat, getAllPlayers } from '../../redux/actions'

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
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='Search' onChange={handleChange} value={search} type="text" />
                <button type="submit"><FcSearch/></button>
            </form>
            <button onClick={handleClick}>refresh</button>
        </div>
    )
}

export default SearchBar
