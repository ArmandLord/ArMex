import { useEffect, useState } from "react";
import { getAllPlayers } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar, FilteredStatus, CardHome } from "../../components";
import {
  ContainerCards,
  ContainerSearch,
  HomeContainer,
  JustifyHome,
  ContainerLoading,
  BtnPaginate,
  PaginateContainer,
  ContainerNotFound,
  TopContainer,
  IconTop
} from "./Home.styled";
import { useLocation } from "react-router-dom";
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'


const Home = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const players = useSelector((state) => state.renderingPlayers);
  const loading = useSelector((state) => state.loading);

  // 
    const [page, setPage] = useState(0)//iria de 10 en 10 ejm : 0-10,20,30
    const [page2, setPage2] = useState(12)//19
    const [btnNext, setBtnNext] = useState(false)
    const [btnPrev, setBtnPrev] = useState(false)

    const handleNextPage = () => {
        if (players.length < (page2 + 1)) {
            setBtnNext(true)
        } else {
            setPage(page + 12);
            setPage2(page2 + 12)
            setBtnPrev(false)
        }

    }

    const handlePreviousPage = () => {
        if (page <= 0) {
            setBtnPrev(true)
        } else {
            setPage(page - 12);
            setPage2(page2 - 12)
            setBtnNext(false)
        }

    }
  // 
  const playersSlice = players?.slice(page, page2);

  useEffect(() => {
    dispatch(getAllPlayers());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const resetOne = (a, b) => {
    setPage(a)
    setPage2(b)
    setBtnNext(false)
    setBtnPrev(false)
  }
  
  return (
    <HomeContainer>
      <JustifyHome>
        <ContainerSearch >
          <SearchBar id='top' reset={resetOne}/>
          <FilteredStatus reset={resetOne}/>
        </ContainerSearch>
        <ContainerCards>
          {loading ? (
            <ContainerLoading>
              <h2>Loading...</h2>
              <img
                src="https://gifimage.net/wp-content/uploads/2017/09/balon-de-futbol-gif-13.gif"
                alt="balón loading gif"
              />
            </ContainerLoading> 
          ) : playersSlice.length !== 0 && !playersSlice.includes(null) ? (
            playersSlice.map((player, i) => (
              <CardHome
                key={player?.id}
                ranking={player?.ranking}
                id={player?.id}
                nickname={player?.nickname}
                status={player?.status}
                avatar={player?.avatar}
              />
            ))
          ) : (
            <ContainerNotFound>
              <h2>Player not found.</h2>
            </ContainerNotFound>
          )}
        </ContainerCards>
        <PaginateContainer>
          <BtnPaginate disabled={btnPrev} onClick={handlePreviousPage}><GoArrowLeft/></BtnPaginate>
          <BtnPaginate disabled={btnNext} onClick={handleNextPage}><GoArrowRight/></BtnPaginate>
        </PaginateContainer>
        <TopContainer>
          <a href='#top'><IconTop/></a>
        </TopContainer>
      </JustifyHome>
    </HomeContainer>
  );
};

export default Home;
