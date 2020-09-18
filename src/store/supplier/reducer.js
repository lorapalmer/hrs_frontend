import initialState from './state';
import {
  CREATE_SUPPLIER,
  CREATE_SUPPLIER_SUCCESS,
  CREATE_SUPPLIER_FAILURE,
} from './actions';

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_SUPPLIER:
      return {
        ...state,
        loading: action.loading,
      };
    case CREATE_SUPPLIER_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        supplier: action.payload,
      };

    case CREATE_SUPPLIER_FAILURE:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    default: {
      return state;
    }
  }
}
