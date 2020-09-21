import api from '../../infra/common/http.service';
import makeCreateSupplier from './createSupplier';
import makeSupplierRepository from '../../infra/supplier/SupplierRepository';

// SUPPLIER REPOSITORY (INFRASTRUCTURE LAYER)
const supplierRepository = makeSupplierRepository({
  api,
});

// CREATE SUPPLIER METHOD FOR REDUX ACTION TRIGGERING
const createSupplier = makeCreateSupplier({
  supplierRepository,
});

export default {
  createSupplier,
};
