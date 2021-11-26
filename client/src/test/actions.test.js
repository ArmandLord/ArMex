import { resetDetail, getAllPlayers, getTopTen } from "../redux/actions";
import { RESET_DETAIL } from "../redux/types";
import {getAllPlayersHelper, getTopTenHelper} from "../redux/actions/helper"



  describe("Action Creators", () => {
  it('Debería retornar una action con las propiedades type "AddTodo" y payload: Este contiene lo que recibe como argumento la funcion ademas del status "Todo" y un id que comienza con el valor 1', () => {
    expect(resetDetail()).toEqual({
      type: RESET_DETAIL
    });
  });
  it('Debería retornar una action con las propiedades type "AddTodo" y payload: Este contiene lo que recibe como argumento la funcion ademas del status "Todo" y un id que comienza con el valor 1', () => { 
    expect(getAllPlayers()).toEqual(getAllPlayersHelper);
  });
 
it('Debería retornar una action con las propiedades type "AddTodo" y payload: Este contiene lo que recibe como argumento la funcion ademas del status "Todo" y un id que comienza con el valor 1', () => { 
    expect(getTopTen()).toEqual(getTopTenHelper);
  });

});