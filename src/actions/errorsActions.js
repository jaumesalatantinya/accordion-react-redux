import * as types from './actionTypes';

export function throwError(_error) {
    let error = { message: _error.message };
    return {type: types.THROW_ERROR, error};
}
