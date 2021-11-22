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
        padding: 0 1rem;
        background: transparent;
        outline: none;
        border: none;
        font-size: 1.2rem;
        @media (max-width: 590px) {
            font-size: 1rem;
            width: 40%;
        }
        &::placeholder {
            color: rgb(200, 200, 200);
        }
        &:focus{
            width: 90%;
            border-bottom: 1px solid yellow;
            transition: 0.5s;

            @media (max-width: 590px) {
                width: 75%;
            }
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

export const ButtonRefresh = styled.button`
    background-image: url('https://res.cloudinary.com/dy9tey0yi/image/upload/v1637359671/Futbol%20players/oroDos_wjepfy.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100px;
    height: 35px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 15px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    font-weight: bold;
`