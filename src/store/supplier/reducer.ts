import {
  CREATE_SUPPLIER_REQUEST,
  CREATE_SUPPLIER_SUCCESS,
  CREATE_SUPPLIER_FAILURE,
  HANDLE_SUPPLIER_FIELDS,
  SET_UNITS,
  SET_DAYS,
} from './actions';
import {CreateSupplierActionTypes} from './types';
import {IGeneral} from '../../view/supplier/AddVenue/pages/General/General.types';
import {IChain} from '../../view/supplier/AddVenue/pages/HotelChain/HotelChain.types';
import {IAddress} from '../../view/supplier/AddVenue/pages/Address/Address.types';
import {IDetails} from '../../view/supplier/AddVenue/pages/Details/Details.types';
import {IUnit} from '../../view/supplier/AddVenue/pages/Units/Units.types';
import {IDay} from '../../view/supplier/AddVenue/pages/Hours/Hours.types';

// SUPPLIER STATE
const initialState = {
  loading: false,
  general: {
    name: '',
    hkey: '',
    amenities: [],
    services: [],
    description: '',
  },
  hotelChain: {
    name: '',
  },
  address: {
    streetName: '',
    buildingNumber: '',
    city: '',
    country: '',
    postalCode: '',
    floorNumber: '',
  },
  details: {
    email: '',
    fax: '',
    phone: '',
    websiteURL: '',
    facebookURL: '',
    instagramURL: '',
    twitterURL: '',
    type: 'details',
  },
  units: [],
  days: [
    {name: 'Monday', status: false},
    {name: 'Tuesday', status: false},
    {name: 'Wednesday', status: false},
    {name: 'Thursday', status: false},
    {name: 'Friday', status: false},
    {name: 'Saturday', status: false},
    {name: 'Sunday', status: false},
  ],
  supplier: null,
  error: null,
};

// SUPPLIER REDUCER
export default function (
  state = initialState,
  action: CreateSupplierActionTypes,
): {
  [p: string]: any;
  general: IGeneral;
  hotelChain: IChain;
  address: IAddress;
  details: IDetails;
  units: IUnit[];
  days: IDay[];
  loading: boolean;
  supplier: null;
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

    case SET_DAYS:
      return {
        ...state,
        days: [...action.payload],
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
