export interface IAmenity {
  id: number;
  name: string;
}

export interface IService {
  id: number;
  name: string;
}

export interface IGeneral {
  name: string;
  hkey: string;
  amenities: IAmenity[];
  services: IService[];
  description: string;
}
