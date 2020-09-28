import {
  CREATE_SUPPLIER_REQUEST,
  CREATE_SUPPLIER_SUCCESS,
  CREATE_SUPPLIER_FAILURE,
  HANDLE_SUPPLIER_FIELDS,
} from './actions';
import rootReducer from '../rootReducer';

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

export type CreateSupplierActionTypes =
  | ICreateSupplierRequestAction
  | ICreateSupplierSuccessAction
  | ICreateSupplierFailureAction
  | IHandleSupplierFieldsAction;

export interface ISupplierGeneralState {
  name: string;
  hkey: string;
  amenities: number[];
  services: number[];
  description: string;
}

export interface ISupplierState {
  loading: boolean;
  general: ISupplierGeneralState;
  supplier: null | string;
  error: null | string;
}

export type RootState = ReturnType<typeof rootReducer>;
