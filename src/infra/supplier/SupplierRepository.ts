// SUPPLIER REPOSITORY WITH HTTP REQUESTS
export default ({api}: {api: any}) => ({
  async add(supplierData: any) {
    //     console.log(supplierData, 'infra');
    //   const user = await api.add('/users', supplierData);
    //   return user;
    return supplierData;
  },
});
