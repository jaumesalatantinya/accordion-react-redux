import * as types from './actionTypes';
import SectionsService from '../services/SectionsService';
import * as errorsActions from '../actions/errorsActions';

export function getSectionsSuccess(sections) {
    return { type: types.GET_SECTIONS_SUCCESS, sections};
}

export function getSections() {
    return function (dispatch) {
        return new SectionsService.getSections().then((sections) => {
            if (sections) {
                dispatch(getSectionsSuccess(sections));
            }
        }).catch( (error) => {
            dispatch(errorsActions.throwError(error));
        });
    };
}
