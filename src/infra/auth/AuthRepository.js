export default ({Auth}) => ({
  // REGISTER ENTITY
  async create({username, email, password}) {
    try {
      const user = await Auth.signUp({
        username,
        password,
        attributes: {email},
      });
      return user;
    } catch (error) {
      return error;
    }
  },

  // AUTHORIZE ENTITY
  async authenticate({email, password}) {
    try {
      const user = await Auth.signIn(email, password);
      return user;
    } catch (error) {
      return error;
    }
  },

  // VERIFY ENTITY
  async verify({username, code}) {
    try {
      const response = await Auth.confirmSignUp(username, code);
      return response;
    } catch (error) {
      return error;
    }
  },

  // SIGN OUT
  async signOut() {
    try {
      const response = await Auth.signOut();
      return response;
    } catch (error) {
      return error;
    }
  },

  // CHECK SESSION
  async getCurrentAuthenticatedUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      return user;
    } catch (error) {
      return error;
    }
  },

  // SOCIAL PROVIDERS
  async getSocialsResponse(provider) {
    await Auth.federatedSignIn({provider});
  },
});
