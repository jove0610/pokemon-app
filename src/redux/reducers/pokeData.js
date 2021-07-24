import {
  CLEAR_POKEDATA,
  SET_DATA,
  SET_SKILLS,
  SET_SPRITES,
} from '../actions/types';

const initialState = {
  data: null,
  sprites: null,
  skills: null,
};

const pokeData = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_DATA:
      return {
        ...state,
        data: payload,
      };
    case SET_SPRITES:
      return {
        ...state,
        sprites: payload,
      };
    case SET_SKILLS:
      return {
        ...state,
        skills: payload,
      };
    case CLEAR_POKEDATA:
      return {
        data: null,
        sprites: null,
        skills: null,
      };
    default:
      return state;
  }
};

export default pokeData;
