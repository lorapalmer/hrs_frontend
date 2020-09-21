export default ({Auth}: {Auth: any}) => ({
  // REGISTER ENTITY
  async create({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }) {
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
  async authenticate({email, password}: {email: string; password: string}) {
    try {
      const user = await Auth.signIn(email, password);
      return user;
    } catch (error) {
      return error;
    }
  },

  // VERIFY ENTITY
  async verify({username, code}: {username: string; code: string}) {
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
  async getSocialsResponse(provider: string) {
    await Auth.federatedSignIn({provider});
  },
});
