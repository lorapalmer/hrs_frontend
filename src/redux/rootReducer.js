import {combineReducers} from 'redux';
import supplier from '../redux/supplier/reducer';

// main reducer which includes others
const rootReducer = combineReducers({
  supplier,
});

export default rootReducer;
