import {CreateSupplierActionTypes} from './types';
import {IUnit} from '../../view/supplier/AddVenue/pages/Units/Units.types';

export const CREATE_SUPPLIER_REQUEST =
  'CREATE_SUPPLIER_REQUEST';
export const CREATE_SUPPLIER_SUCCESS =
  'CREATE_SUPPLIER_SUCCESS';
export const CREATE_SUPPLIER_FAILURE =
  'CREATE_SUPPLIER_FAILURE';
export const HANDLE_SUPPLIER_FIELDS =
  'HANDLE_SUPPLIER_FIELDS';
export const SET_UNITS = 'SET_UNITS';
export const SET_DAYS = 'SET_DAYS';

// CREATE SUPPLIER ACTION CREATORS
const createSupplierRequest = (): CreateSupplierActionTypes => ({
  type: CREATE_SUPPLIER_REQUEST,
});

const createSupplierSuccess = (
  payload: any,
): CreateSupplierActionTypes => ({
  type: CREATE_SUPPLIER_SUCCESS,
  payload,
});

const createSupplierFailure = (
  payload: any,
): CreateSupplierActionTypes => ({
  type: CREATE_SUPPLIER_FAILURE,
  payload,
});

export const handleSupplierFields = (
  key: string,
  name: string,
  value: string | number[],
): CreateSupplierActionTypes => ({
  type: HANDLE_SUPPLIER_FIELDS,
  key,
  name,
  value,
});

export const setUnits = (
  payload: (
    | IUnit
    | {
        quantity: number;
        cost: string;
        pricingTypeUnit: string;
        name: string;
      }
  )[],
) => ({
  type: SET_UNITS,
  payload,
});

export const setDays = (
  payload: {name: string; status: boolean}[],
) => ({
  type: SET_DAYS,
  payload,
});

// CREATE SUPPLIER FACADE ACTION TO EXECUTE AJAX REQUEST
export const createSupplierAction = (data: any) => (
  dispatch: any,
  _: any,
  container: any,
) => {
  dispatch(createSupplierRequest());
  container.createSupplier(data, {
    onSuccess: (supplier: any) =>
      dispatch(createSupplierSuccess(supplier)),
    onError: (error: any) =>
      dispatch(createSupplierFailure(error)),
  });
};
