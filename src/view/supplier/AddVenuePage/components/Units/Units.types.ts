export interface IUnit {
  venueId: number;
  unitTypeId: number;
  quantity: number;
  cost: number;
  pricingTypeUnit: number;
}

// "ONE_HOUR", "ONE_DAY", "ONE_WEEK", "ONE_MONTH"

export type UnitsType = IUnit[] | null;
