export interface IAddress {
  streetName: string;
  buildingNumber: number | null;
  city: string;
  country: string;
  postalCode: number | null;
  floorNumber: number | null;
}

export type AddressType = IAddress[] | null;
