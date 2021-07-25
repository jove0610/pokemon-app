import { ADD_TO_TEAM, CLEAR_TEAM, REMOVE_FROM_TEAM } from './types';

export const addToTeam = (pokeData, spriteURL) => (dispatch) => {
  const data = {
    data: pokeData,
    sprite: spriteURL,
  };
  dispatch({
    type: ADD_TO_TEAM,
    payload: data,
  });
};

export const removeFromTeam = (pokeName) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_TEAM,
    payload: pokeName,
  });
};

export const clearTeam = () => (dispatch) => {
  dispatch({
    type: CLEAR_TEAM,
  });
};
