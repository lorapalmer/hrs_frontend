interface IValidationTypes {
  email: string;
  url: string;
}

export interface IValidation {
  required: string;
  types: IValidationTypes;
}
