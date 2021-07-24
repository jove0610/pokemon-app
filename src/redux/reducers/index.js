import { combineReducers } from 'redux';
import pokeData from './pokeData';
import myTeam from './myTeam';

export default combineReducers({
  pokeData,
  myTeam,
});
