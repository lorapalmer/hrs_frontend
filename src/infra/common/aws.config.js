import Amplify, {Auth} from 'aws-amplify';
import config from './env.config';

const {
    REGION,
    APP_CLIENT_ID,
    USER_POOL_ID,
    DOMAIN,
    REDIRECT_SIGNIN,
    REDIRECT_SIGNOUT,
  } = config.cognito,
  awsConfig = {
    Auth: {
      userPoolId: USER_POOL_ID,
      userPoolWebClientId: APP_CLIENT_ID,
      region: REGION,
      oauth: {
        domain: DOMAIN,
        scope: ['email', 'openid', 'profile', 'aws.cognito.signin.user.admin'],
        redirectSignIn: REDIRECT_SIGNIN,
        redirectSignOut: REDIRECT_SIGNOUT,
        responseType: 'token',
      },
      federationTarget: 'COGNITO_USER_POOLS',
    },
  };

// AWS AMPLIFY UNIQUE CREDENTIALS
Amplify.configure(awsConfig);

export default Auth;
