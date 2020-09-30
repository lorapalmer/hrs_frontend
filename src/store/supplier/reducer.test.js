import {
  HANDLE_SUPPLIER_FIELDS,
  handleSupplierFields,
} from './actions';

describe('actions', () => {
  it('should create an action to handle supplier fields', () => {
    const expectedAction = {
      type: HANDLE_SUPPLIER_FIELDS,
    };
    expect(handleSupplierFields()).toEqual(expectedAction);
  });
});
