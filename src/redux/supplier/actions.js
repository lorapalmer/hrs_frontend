export const CREATE_SUPPLIER = 'CREATE_SUPPLIER';
export const CREATE_SUPPLIER_SUCCESS = 'CREATE_SUPPLIER_SUCCESS';
export const CREATE_SUPPLIER_FAILURE = 'CREATE_SUPPLIER_FAILURE';

export const createSupplier = () => ({
  type: CREATE_SUPPLIER,
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
