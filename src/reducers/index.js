import {combineReducers} from 'redux';
import accordion from './accordionReducers';
import errors from './errorsReducers';

const rootReducers = combineReducers ({
    accordion,
    errors
});

export default rootReducers;
