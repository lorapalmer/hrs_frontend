import {combineReducers} from 'redux';
import supplier from './supplier/reducer';

// MAIN REDUCER WHICH BRINGS OTHERS TOGETHER
const rootReducer = combineReducers({
  supplier,
});

export default rootReducer;
