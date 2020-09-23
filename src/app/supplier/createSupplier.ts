// CONNECT STORE LAYER WITH INFRASTRUCTURE LAYER VIA DEPENDENCIES INJECTION PATTERN (FUNCTIONAL STYLE)
export default ({supplierRepository}: {supplierRepository: any}) => async (
  supplierData: any,
  {onSuccess, onError}: {onSuccess: any; onError: any},
) => {
  try {
    const supplier = await supplierRepository.add(supplierData);
    onSuccess(supplier);
  } catch (error) {
    onError(error);
  }
};
