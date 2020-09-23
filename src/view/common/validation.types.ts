interface IValidationRequired {
  required: boolean;
  message: string;
}

export interface IValidation {
  isRequired: IValidationRequired;
}
