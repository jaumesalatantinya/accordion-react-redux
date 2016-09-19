import {combineReducers} from 'redux';
import sections from './sectionsReducers';
import errors from './errorsReducers';

const rootReducers = combineReducers ({
    sections,
    errors
});

export default rootReducers;
