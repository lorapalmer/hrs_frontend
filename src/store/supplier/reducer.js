import {
  CREATE_SUPPLIER_REQUEST,
  CREATE_SUPPLIER_SUCCESS,
  CREATE_SUPPLIER_FAILURE,
} from './actions';

// SUPPLIER STATE
const initialState = {
  loading: false,
  supplier: null,
  error: null,
};

// SUPPLIER REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_SUPPLIER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_SUPPLIER_SUCCESS:
      return {
        ...state,
        loading: false,
        supplier: action.payload,
      };

    case CREATE_SUPPLIER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
}
