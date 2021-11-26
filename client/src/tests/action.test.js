import { getAllPlayers, getById, resetDetail } from "../redux/actions/index.js";
import reducer from '../reducer';

test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        players: [],
        renderingPlayers: [],
        player: {},
        topTen: [],
        loading: true,
      })
  })