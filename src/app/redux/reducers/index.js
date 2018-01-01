import { combineReducers } from 'redux';
import contextReducer from 'app/redux/reducers/context';

const reducer = combineReducers({
  context: contextReducer,
});

export default reducer;
