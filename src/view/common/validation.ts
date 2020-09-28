import {IValidation} from './validation.types';

const validateMessages: IValidation = {
  required: 'This field is required',
  types: {
    email: '${label} is not valid',
    url: '${label} URL is not valid',
  },
};

export default validateMessages;
