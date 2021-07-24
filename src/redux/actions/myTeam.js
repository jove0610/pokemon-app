import { ADD_TO_TEAM, REMOVE_FROM_TEAM } from './types';

export const addToTeam = (spriteURL) => (dispatch) => {
  dispatch({
    type: ADD_TO_TEAM,
    payload: spriteURL,
  });
};

export const removeFromTeam = (spriteURL) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_TEAM,
    payload: spriteURL,
  });
};
