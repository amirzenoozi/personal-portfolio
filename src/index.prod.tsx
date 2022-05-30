import 'regenerator-runtime/runtime';
import App from './app';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import preset from 'jss-preset-default';
import rtl from 'jss-rtl';
import { create as createJss } from 'jss';
import { JssProvider } from 'react-jss';

// Configure JSS
const jssConfig = createJss().use(...preset().plugins, rtl());

// Your Production Scripts Should Be Here!

ReactDOM.render(
    <Provider store={store}>
      <JssProvider jss={jssConfig}>
        <App />
      </JssProvider>
    </Provider>,
    document.getElementById('root')
);
