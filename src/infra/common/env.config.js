const development = {
  cognito: {
    USER_POOL_ID: '',
    APP_CLIENT_ID: '',
    REGION: '',
    DOMAIN: '',
    REDIRECT_SIGNIN: '',
    REDIRECT_SIGNOUT: '',
  },
  api: {
    BASE_URL: '',
  },
};

const local = {
  cognito: {
    USER_POOL_ID: '',
    APP_CLIENT_ID: '',
    REGION: '',
    DOMAIN: '',
    REDIRECT_SIGNIN: '',
    REDIRECT_SIGNOUT: '',
  },
  api: {
    BASE_URL: '',
  },
};

// DEFINE ENVIRONMENT
const config =
  typeof process.env.REACT_APP_ENV !== 'undefined' &&
  process.env.REACT_APP_ENV === 'local'
    ? local
    : development;

export default {...config};
