import {
  CREATE_SUPPLIER_REQUEST,
  CREATE_SUPPLIER_SUCCESS,
  CREATE_SUPPLIER_FAILURE,
  HANDLE_SUPPLIER_FIELDS,
} from './actions';

// SUPPLIER STATE
const initialState = {
  loading: false,
  supplier: {},
  error: null,
};

// SUPPLIER REDUCER
export default function (state = initialState, action: any) {
  switch (action.type) {
    case HANDLE_SUPPLIER_FIELDS:
      return {
        ...state,
        supplier: {
          ...state.supplier,
          [action.name]: action.value,
        },
      };
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
