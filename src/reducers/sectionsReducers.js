import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function accordionReducers (state = initialState.sections, action) {

    switch (action.type) {
        case types.GET_SECTIONS_SUCCESS:
            return action.sections;
            break;
        default:
            return state;
    }
}
