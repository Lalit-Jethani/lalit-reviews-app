import { combineReducers } from 'redux';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
   searchReviews : searchReducer
});

export default rootReducer;
