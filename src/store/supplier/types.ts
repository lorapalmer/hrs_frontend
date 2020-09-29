import {
  CREATE_SUPPLIER_REQUEST,
  CREATE_SUPPLIER_SUCCESS,
  CREATE_SUPPLIER_FAILURE,
  HANDLE_SUPPLIER_FIELDS,
  SET_UNITS,
} from './actions';
import rootReducer from '../rootReducer';
import {IUnit} from '../../view/supplier/AddVenuePage/components/Units/Units.types';

interface ICreateSupplierRequestAction {
  type: typeof CREATE_SUPPLIER_REQUEST;
}

interface ICreateSupplierSuccessAction {
  type: typeof CREATE_SUPPLIER_SUCCESS;
  payload: any;
}

interface ICreateSupplierFailureAction {
  type: typeof CREATE_SUPPLIER_FAILURE;
  payload: any;
}

interface IHandleSupplierFieldsAction {
  type: typeof HANDLE_SUPPLIER_FIELDS;
  key: string;
  name: string;
  value: string | number[];
}

interface ISetUnits {
  type: typeof SET_UNITS;
  payload: IUnit[];
}

export type CreateSupplierActionTypes =
  | ICreateSupplierRequestAction
  | ICreateSupplierSuccessAction
  | ICreateSupplierFailureAction
  | IHandleSupplierFieldsAction
  | ISetUnits;

export interface ISupplierGeneralState {
  name: string;
  hkey: string;
  amenities: number[];
  services: number[];
  description: string;
}

export interface ISupplierHotelChainState {
  name: string;
}

export interface ISupplierDetailsState {
  email: string;
  fax: string;
  phone: string;
  websiteURL: string;
  facebookURL: string;
  instagramURL: string;
  twitterURL: string;
}

export interface ISupplierAddressState {
  streetName: string;
  buildingNumber: number | null;
  city: string;
  country: string;
  postalCode: number | null;
  floorNumber: number | null;
}

export interface ISupplierUnitsState {
  units: IUnit[];
}

export interface ISupplierState {
  loading: boolean;
  general: ISupplierGeneralState;
  hotelChain: ISupplierHotelChainState;
  details: ISupplierDetailsState;
  address: ISupplierAddressState;
  units: ISupplierUnitsState;
  supplier: null | string;
  error: null | string;
}

export type RootState = ReturnType<typeof rootReducer>;
