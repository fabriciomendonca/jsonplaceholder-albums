import { combineReducers } from 'redux';

import albumsReducer from './albums-reducer';

const rootReducer = combineReducers({
  albums: albumsReducer
});

export default rootReducer;