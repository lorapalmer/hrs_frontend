import {
  CREATE_SUPPLIER_REQUEST,
  CREATE_SUPPLIER_SUCCESS,
  CREATE_SUPPLIER_FAILURE,
  HANDLE_SUPPLIER_FIELDS,
  SET_UNITS,
  SET_DAYS,
} from './actions';
import rootReducer from '../rootReducer';
import {IUnit} from '../../view/supplier/AddVenue/pages/Units/Units.types';

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

interface ISetDays {
  type: typeof SET_DAYS;
  payload: {name: string; status: boolean}[];
}

export type CreateSupplierActionTypes =
  | ICreateSupplierRequestAction
  | ICreateSupplierSuccessAction
  | ICreateSupplierFailureAction
  | IHandleSupplierFieldsAction
  | ISetUnits
  | ISetDays;

export type RootState = ReturnType<typeof rootReducer>;
