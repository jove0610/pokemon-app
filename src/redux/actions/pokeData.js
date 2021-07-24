import { CLEAR_POKEDATA, SET_DATA, SET_SKILLS, SET_SPRITES } from './types';

export const clearData = () => (dispatch) => {
  dispatch({
    type: CLEAR_POKEDATA,
  });
};

export const setData = (data) => (dispatch) => {
  dispatch({
    type: SET_DATA,
    payload: data,
  });
};

export const setSprites = (sprites) => (dispatch) => {
  dispatch({
    type: SET_SPRITES,
    payload: sprites,
  });
};

export const setSkills = (skills) => (dispatch) => {
  dispatch({
    type: SET_SKILLS,
    payload: skills,
  });
};
