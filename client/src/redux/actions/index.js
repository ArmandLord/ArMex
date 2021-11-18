import { GET_ALL_PLAYERS, GET_BY_ID, GET_FEAT, GET_TOP_TEN } from '../types'
import axios from 'axios'

export const getAllPlayers = () => {
    return async function (dispatch) {
      const data = await axios("http://localhost:3001/player");
      return dispatch({
        type: GET_ALL_PLAYERS,
        payload: data.data,
      });
    };
  };

export const getById = (id) => {
    return async function (dispatch) {
        const data = await axios(`http://localhost:3001/player/${id}`);
        return dispatch({
        type: GET_BY_ID,
        payload: data.data,
      });
    };
  };

export const getTopTen = () => {
    return async function (dispatch) {
        const data = await axios('http://localhost:3001/player/topTen');
        return dispatch({
        type: GET_TOP_TEN,
        payload: data.data,
      });
    };
  };

export const getFeat = (payload) => {
    return async function (dispatch) {
        const data = await axios(`http://localhost:3001/player/search/${payload}`);
        return dispatch({
        type: GET_FEAT,
        payload: data.data,
      });
    };
  };


