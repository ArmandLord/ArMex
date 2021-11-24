import { GET_ALL_PLAYERS, GET_BY_ID, GET_FEAT, GET_TOP_TEN, RESET_DETAIL } from "../types";

const dataInitial = {
  players: [],
  renderingPlayers: [],
  player: {},
  topTen: [],
  loading: true,
};

export default function charactersReducer(
  state = dataInitial,
  { type, payload }
) {
  switch (type) {
    case GET_ALL_PLAYERS:
      return {
        ...state,
        players: payload, //reset filters, 3000 players
        renderingPlayers: payload,
        loading: false,
      };
    case GET_BY_ID:
      return {
        ...state,
        player: payload,
      };
      case RESET_DETAIL: 
      return{
          ...state,
          player: {}
      };
    case GET_TOP_TEN:
      return {
        ...state,
        topTen: payload,
      };
    case GET_FEAT:
      return {
        ...state,
        renderingPlayers: payload, //checar el back, como entrega el payload
        loading: false,
      };
    default:
      return state;
  }
}
