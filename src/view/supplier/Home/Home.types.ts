export interface IAmenity {
  id: number;
  name: string;
}

export interface IService {
  id: number;
  name: string;
}

export type AmenitiesType = IAmenity[] | null;
export type ServicesType = IService[] | null;
