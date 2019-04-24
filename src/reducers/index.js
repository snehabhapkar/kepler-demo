import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import keplerGlReducer from 'kepler.gl/reducers';

const combined = (history) => combineReducers({
  keplerGl: keplerGlReducer,
  router: connectRouter(history),
});
export default combined;
