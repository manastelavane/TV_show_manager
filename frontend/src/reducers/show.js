/* eslint-disable indent */
/* eslint-disable no-case-declarations */
import * as actionType from '../constants/actionTypes';

const showReducer = (state = { shows: null }, action) => {
  switch (action.type) {
    case actionType.CREATE:
      const newshows = state.shows.concat(action.data);
      return { ...state, shows: newshows };
    case actionType.FETCH_ALL:
      return { ...state, shows: action.data };
    case actionType.UPDATE:
      const updatedshows = state.shows.map((show) => {
        if (show._id === action.data._id) {
          return action.data;
        }
        return show;
      });
      return { ...state, shows: updatedshows };
    case actionType.DELETE:
      const updatedshow = state.shows.filter(
        (show) => show._id !== action.data.id
      );
      return { ...state, shows: updatedshow };
    default:
      return state;
  }
};

export default showReducer;
