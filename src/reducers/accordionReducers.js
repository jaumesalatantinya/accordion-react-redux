import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function accordionReducers (state = initialState.accordion, action) {
    let newState;
    switch (action.type) {
        case types.LOAD_CONTENT_SUCCESS:
            newState = Object.assign({}, state);
            newState.content = action.content;
            return newState;
            break;
        case types.CHANGE_CURRENT_PANEL:
            newState = Object.assign({}, state);
            newState.currentPanel = action.newCurrentPanelId;
            return newState;
            break;
        default:
            return state;
    }
}
