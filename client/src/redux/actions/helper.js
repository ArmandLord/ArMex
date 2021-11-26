import axios from "axios"
import { GET_ALL_PLAYERS, GET_BY_ID, GET_FEAT, GET_TOP_TEN } from "../types";


export const getAllPlayersHelper = async (dispatch) => {
        const data = await axios("/player");
        return dispatch({
          type: GET_ALL_PLAYERS,
          payload: data.data,
        });
      ;
}
/*  export const getByIdHelper = async (dispatch, id) => { {
        const data = await axios(`/player/${id}`);
        return dispatch({
        type: GET_BY_ID,
        payload: data.data,
      });
    };
}  */
export const getTopTenHelper = async (dispatch) => {
    const data = await axios('/player/topTen');
    return dispatch({
    type: GET_TOP_TEN,
    payload: data.data,
  });
  ;
}
/*  export const getFeatHelper = async (dispatch, payload) => {
    const data = await axios(`/player/search/${payload}`);
    return dispatch({
    type: GET_FEAT,
    payload: data.data.players,
  });
  ;
}  */