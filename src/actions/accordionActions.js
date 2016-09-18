import * as types from './actionTypes';
import ContentServiceProvider from '../services/ContentServiceProvider';
import {throwAppError} from './errorsActions';

export function loadContentSuccess(content) {
    return { type: types.LOAD_CONTENT_SUCCESS, content};
}

export function loadContent() {
    return function (dispatch) {
        return new ContentServiceProvider.getContentFromApi().then((content) => {
            if (content) {
                dispatch(loadContentSuccess(content));
            }
        }).catch( (error) => {
            dispatch(throwAppError(error));
        });
    };
}

export function changeCurrentPanel(newCurrentPanelId) {
    return { type: types.CHANGE_CURRENT_PANEL, newCurrentPanelId};
}
