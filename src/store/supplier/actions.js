export const CREATE_SUPPLIER_REQUEST = 'CREATE_SUPPLIER_REQUEST';
export const CREATE_SUPPLIER_SUCCESS = 'CREATE_SUPPLIER_SUCCESS';
export const CREATE_SUPPLIER_FAILURE = 'CREATE_SUPPLIER_FAILURE';

// CREATE SUPPLIER ACTION CREATORS
const createSupplierRequest = () => ({
  type: CREATE_SUPPLIER_REQUEST,
});

const createSupplierSuccess = (payload) => ({
  type: CREATE_SUPPLIER_SUCCESS,
  payload,
});

const createSupplierFailure = (payload) => ({
  type: CREATE_SUPPLIER_FAILURE,
  payload,
});

// CREATE SUPPLIER FACADE ACTION TO EXECURE AJAX REQUEST
export const createSupplierAction = (data) => (dispatch, _, container) => {
  dispatch(createSupplierRequest());
  container.createSupplier(data, {
    onSuccess: (supplier) => dispatch(createSupplierSuccess(supplier)),
    onError: (error) => dispatch(createSupplierFailure(error)),
  });
};
