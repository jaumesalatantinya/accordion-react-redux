import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function accordionReducers (state = initialState.sections, action) {
    let newState;
    switch (action.type) {
        case types.GET_SECTIONS_SUCCESS:
            newState = Object.assign({}, state);
            newState = action.sections;
            return newState;
            break;
        default:
            return state;
    }
}
