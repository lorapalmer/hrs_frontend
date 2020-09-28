import {CreateSupplierActionTypes} from './types';

export const CREATE_SUPPLIER_REQUEST =
  'CREATE_SUPPLIER_REQUEST';
export const CREATE_SUPPLIER_SUCCESS =
  'CREATE_SUPPLIER_SUCCESS';
export const CREATE_SUPPLIER_FAILURE =
  'CREATE_SUPPLIER_FAILURE';
export const HANDLE_SUPPLIER_FIELDS =
  'HANDLE_SUPPLIER_FIELDS';

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
