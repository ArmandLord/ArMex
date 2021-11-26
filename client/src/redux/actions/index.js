import {  GET_BY_ID, GET_FEAT, RESET_DETAIL } from '../types'
import { getAllPlayersHelper, getTopTenHelper } from './helper';
import axios from "axios"

export const getAllPlayers = () => {
    return getAllPlayersHelper
  };

export const getById = (id) => {
const getByIdHelper = async (dispatch) => { {
    const data = await axios(`/player/${id}`);
    return dispatch({
    type: GET_BY_ID,
    payload: data.data,
  });
};
}
    return getByIdHelper
  };

  export const getFeat = (payload) => {
    const getFeatHelper = async (dispatch) => { {
      const data = await axios(`/player/search/${payload}`);
      return dispatch({
      type: GET_FEAT,
      payload: data.data.players,
    });
    ;
  }
}
    return  getFeatHelper
    };
  




export const getTopTen = () => {
    return getTopTenHelper
  };


  export const resetDetail = () => {
    return {
        type: RESET_DETAIL,
       
    }
}





