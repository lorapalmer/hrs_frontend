import React from 'react';
import {render} from 'react-dom';
import App from './view/common/App/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store/config';
import 'antd/dist/antd.css';
import './view/styles/index.css';

// ENTRY POINT FOR REACT APP WITH REDUX STORE PROVIDER
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// PWA
serviceWorker.unregister();
