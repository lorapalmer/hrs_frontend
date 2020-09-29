import {
  CREATE_SUPPLIER_REQUEST,
  CREATE_SUPPLIER_SUCCESS,
  CREATE_SUPPLIER_FAILURE,
  HANDLE_SUPPLIER_FIELDS,
  SET_UNITS,
} from './actions';
import {
  CreateSupplierActionTypes,
  // ISupplierState,
} from './types';

// SUPPLIER STATE
const initialState = {
  loading: false,
  touched: false,
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
    email: 'newme1989.5@gmail.com',
    fax: '2323',
    phone: '0936757386',
    websiteURL: 'https://www.apple.com',
    facebookURL:
      'https://www.facebook.com/TelychkoVitaliiS/',
    instagramURL: 'https://www.instagram.com',
    twitterURL: 'https://www.twitter.com',
  },
  units: [],
  prices: {},
  hours: {},
  supplier: null,
  error: null,
};

// SUPPLIER REDUCER
export default function (
  state = initialState,
  action: CreateSupplierActionTypes,
): {
  [p: string]: any;
  general: {
    amenities: number[];
    hkey: string;
    name: string;
    description: string;
    services: number[];
  };
  hotelChain: {name: string};
  address: {
    country: string;
    streetName: string;
    city: string;
    postalCode: string;
    floorNumber: string;
    buildingNumber: string;
  };
  supplier: null;
  details: {
    facebookURL: string;
    phone: string;
    websiteURL: string;
    twitterURL: string;
    instagramURL: string;
    fax: string;
    email: string;
  };
  units: any[];
  loading: boolean;
  error: null;
} {
  switch (action.type) {
    case HANDLE_SUPPLIER_FIELDS:
      return {
        ...state,
        [action.key]: {
          ...(state as any)[action.key],
          [action.name]: action.value,
        },
      };
    case SET_UNITS:
      return {
        ...state,
        units: [...action.payload],
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
