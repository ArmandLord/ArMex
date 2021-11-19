import styled from "styled-components";
import { FaSearch } from 'react-icons/fa'

export const SearchBarContainer = styled.form`
    /* background: red; */
    width: 90%;
    height: 50px;
    
    input {
        width: 20%;
        color: #fff;
        height: 100%;
        padding: 0 .5rem;
        background: transparent;
        outline: none;
        border: none;
        font-size: 1.2rem;
        &::placeholder {
            color: rgb(200, 200, 200);
        }
        &:focus{
            width: 90%;
            border-bottom: 2px solid red;
            transition: 0.5s;
        }
    }
    button {
        width: 40px;
        height: 40px;
        outline: none;
        border: none;
        background: transparent;
        box-shadow: 0px 0px 5px rgba(200, 200, 200, .5);
        border-radius: 999px;
        cursor: pointer;
        
    }
`

export const SearchIcon = styled(FaSearch)`
    font-size: 1rem;
    color: #fff;
`