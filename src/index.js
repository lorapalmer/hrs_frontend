import React from 'react';
import {render} from 'react-dom';
import App from './pages/App/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './redux/config';
import 'antd/dist/antd.css';
import './styles/index.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
