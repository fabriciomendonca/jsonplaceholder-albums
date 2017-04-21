import { FETCH_ALBUMS } from '../actions/action-types';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_ALBUMS:
      return action.payload;
  }

  return state;
}