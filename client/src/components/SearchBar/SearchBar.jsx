import { FcSearch } from 'react-icons/fc'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getFeat } from '../../redux/actions'

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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='Search' onChange={handleChange} value={search} type="text" />
                <button type="submit"><FcSearch/></button>
            </form>
        </div>
    )
}

export default SearchBar
