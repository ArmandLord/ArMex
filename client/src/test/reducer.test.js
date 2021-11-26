import { getAllPlayers, getById } from "../redux/actions";
import reducer from "../redux/reducer/index";
import axios from "axios"


describe("reducer", () => {
  it("Deberia retornar el estado inicial", () => {
    expect(reducer(undefined, {
        players: [],
        renderingPlayers: [],
        player: {},
        topTen: [],
        loading: true,
      })).toEqual({
        players: [],
        renderingPlayers: [],
        player: {},
        topTen: [],
        loading: true,
      });
  });

});