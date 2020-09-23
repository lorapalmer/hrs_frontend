export const CREATE_SUPPLIER_REQUEST = 'CREATE_SUPPLIER_REQUEST';
export const CREATE_SUPPLIER_SUCCESS = 'CREATE_SUPPLIER_SUCCESS';
export const CREATE_SUPPLIER_FAILURE = 'CREATE_SUPPLIER_FAILURE';
export const HANDLE_SUPPLIER_FIELDS = 'HANDLE_SUPPLIER_FIELDS';

// CREATE SUPPLIER ACTION CREATORS
const createSupplierRequest = () => ({
  type: CREATE_SUPPLIER_REQUEST,
});

const createSupplierSuccess = (payload: any) => ({
  type: CREATE_SUPPLIER_SUCCESS,
  payload,
});

const createSupplierFailure = (payload: any) => ({
  type: CREATE_SUPPLIER_FAILURE,
  payload,
});

export const handleSupplierFields = (name: any, value: any) => ({
  type: HANDLE_SUPPLIER_FIELDS,
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
    onSuccess: (supplier: any) => dispatch(createSupplierSuccess(supplier)),
    onError: (error: any) => dispatch(createSupplierFailure(error)),
  });
};
