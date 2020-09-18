export const CREATE_SUPPLIER_REQUEST = 'CREATE_SUPPLIER_REQUEST';
export const CREATE_SUPPLIER_SUCCESS = 'CREATE_SUPPLIER_SUCCESS';
export const CREATE_SUPPLIER_FAILURE = 'CREATE_SUPPLIER_FAILURE';

export const createSupplierRequest = () => ({
  type: CREATE_SUPPLIER_REQUEST,
  loading: true,
});

export const createSupplierSuccess = (data) => ({
  type: CREATE_SUPPLIER_SUCCESS,
  payload: data,
  loading: false,
});

export const createSupplierFailure = (error) => ({
  type: CREATE_SUPPLIER_FAILURE,
  loading: false,
  error,
});
