import {
  CREATE_SUPPLIER_REQUEST,
  CREATE_SUPPLIER_SUCCESS,
  CREATE_SUPPLIER_FAILURE,
  HANDLE_SUPPLIER_FIELDS,
} from './actions';
import {
  CreateSupplierActionTypes,
  ISupplierState,
} from './types';

// SUPPLIER STATE
const initialState = {
  loading: false,
  general: {
    name: 'bob',
    hkey: '213',
    amenities: [3],
    services: [2],
    description: 'sfsdf',
  },
  hotelChain: {
    name: 'Marriott',
  },
  address: {
    streetName: 'Vasylkivska',
    buildingNumber: '23',
    city: 'Kyiv',
    country: 'Ukraine',
    postalCode: '12',
    floorNumber: '14',
  },
  details: {
    email: '',
    fax: '',
    phone: '',
    websiteURL: '',
    facebookURL: '',
    instagramURL: '',
    twitterURL: '',
  },
  units: [],
  supplier: null,
  error: null,
};

// SUPPLIER REDUCER
export default function (
  state = initialState,
  action: CreateSupplierActionTypes,
): ISupplierState {
  switch (action.type) {
    case HANDLE_SUPPLIER_FIELDS:
      return {
        ...state,
        [action.key]: {
          ...(state as any)[action.key],
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
