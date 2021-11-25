import styled from "styled-components";
import { Container } from '../../GlobalStyles/GlobalStyles'

export const HomeContainer = styled.div`
    background: rgb(156,18,56);
    background: linear-gradient(130deg, rgba(156,18,56,1) 0%, rgba(0,0,0,1) 100%);
    margin-bottom: 250px;
`

export const JustifyHome = styled(Container)`
    /* background: blue; */
`

export const ContainerLoading = styled.div`
    height: calc(100vh - 60px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2{
        font-size: 2rem;
        color: #fff;
    }
`
export const ContainerNotFound = styled.div`
    height: calc(100vh - 60px);
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 5rem;
    h2{
        font-size: 2rem;
        color: #fff;
    }
`

export const ContainerCards = styled.div`
    /* background: #fff; */
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding-bottom: 30px;
    @media (max-width: 1199px) {
        justify-content: center;
    }
`

export const ContainerSearch = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    /* background: #fff; */
`

export const PaginateContainer = styled.div`
    width:11%;
    margin: 0 auto;
    display: flex;
    justify-content:space-around;


`

export const BtnPaginate = styled.button `
    padding: .1rem 0 0 0;
    border: none;
    height: 2rem;
    width: 2.5rem;
    border-radius: .8rem;
    background: #000000;
    margin-bottom: 1rem;
    color: #e0e0e0;
    align-items: center;
    margin: 0 .8rem 1rem 0;
    font-size: 1.5rem;



    &:hover{
        cursor: pointer;
        color: white;
        
    }
`