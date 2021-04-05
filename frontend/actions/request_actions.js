import * as RequestApiUtil from '../util/request_api_util';

export const RECEIVE_REQUEST = "RECEIVE_REQUEST";
export const REMOVE_REQUEST = "REMOVE_REQUEST";

export const receiveRequest = (request) => ({
    type: RECEIVE_REQUEST,
    request
})

export const removeRequest = (request) => ({
    type: REMOVE_REQUEST,
    request
})

export const createRequest = (request) => dispatch => (
    RequestApiUtil.createRequest(request).then(request => dispatch(receiveRequest(request)))
);

export const fetchRequest = (id) => dispatch => (
    RequestApiUtil.fetchRequest(id).then(request => dispatch(receiveRequest(request)))
);

export const deleteRequest = (id) => dispatch => (
    RequestApiUtil.deleteRequest(id).then(request => dispatch(removeRequest(request)))
);