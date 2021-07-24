import { ADD_TO_TEAM, REMOVE_FROM_TEAM } from '../actions/types';

const myTeam = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_TEAM:
      return [...state, payload];
    case REMOVE_FROM_TEAM:
      return state.filter((spriteURL) => spriteURL !== payload);
    default:
      return state;
  }
};

export default myTeam;
