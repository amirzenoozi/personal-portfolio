import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './app';
import 'src/helpers/translate-helper';

import preset from 'jss-preset-default';
import { create as createJss } from 'jss';
import { JssProvider } from 'react-jss';

// Configure JSS
const jssConfig = createJss().use(...preset().plugins);

ReactDOM.render(
    <Provider store={store}>
      <JssProvider jss={jssConfig}>
        <App />
      </JssProvider>
    </Provider>,
    document.getElementById('root')
);
