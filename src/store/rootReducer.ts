import {combineReducers} from 'redux';
import supplierReducer from './supplier/reducer';

// MAIN REDUCER WHICH BRINGS OTHERS TOGETHER
const rootReducer = combineReducers({
  supplierReducer,
});

export default rootReducer;
