import {IValidation} from './validation.types';

const validateMessages: IValidation = {
  required: 'This field is required',
  types: {
    // eslint-disable-next-line no-template-curly-in-string
    email: '${label} is not valid',
    // eslint-disable-next-line no-template-curly-in-string
    url: '${label} URL is not valid',
  },
};

export default validateMessages;
