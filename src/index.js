import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import * as sectionsActions from './actions/sectionsActions';
import App from './components/App';

import './styles/index.scss';

const store = configureStore();

store.dispatch(sectionsActions.getSections());

ReactDom.render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
