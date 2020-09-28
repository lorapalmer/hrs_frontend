import React, {FC} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Login from '../../auth/Login/Login';
import Register from '../../auth/Register/Register';
import Layout from '../Layout/Layout';
import AddVenuePage from '../../supplier/AddVenuePage';

// ROUTES FOR WHOLE APP
const App: FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={AddVenuePage} />
          <Route exact path='/login' component={Login} />
          <Route
            exact
            path='/register'
            component={Register}
          />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
