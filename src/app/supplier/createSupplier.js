// CONNECT STORE LAYER WITH INFRASTRUCTURE LAYER VIA DEPENDENCIES INJECTION PATTERN (FUNCTIONAL STYLE)
export default ({supplierRepository}) => async (
  supplierData,
  {onSuccess, onError},
) => {
  try {
    const supplier = await supplierRepository.add(supplierData);
    onSuccess(supplier);
  } catch (error) {
    onError(error);
  }
};
