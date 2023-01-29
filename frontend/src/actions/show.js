import { CREATE, DELETE, FETCH_ALL, UPDATE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getshows = () => async (dispatch) => {
    try {
        const { data } = await api.fetchshows();
        dispatch({ type: FETCH_ALL, data });
    } catch (error) {
        console.log(error);
    }
};

export const createshow = (formData) => async (dispatch) => {
    try {
        //   dispatch({ type: START_LOADING });
        const { data } = await api.createshow(formData);
        dispatch({ type: CREATE, data });
    } catch (error) {
        console.log(error);
    }
};
export const updateshow = (formData, id) => async (dispatch) => {
    try {
        const { data } = await api.updateshow(formData, id);
        dispatch({ type: UPDATE, data });
    } catch (error) {
        console.log(error);
    }
};
export const deleteshow = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteshow(id);
        dispatch({ type: DELETE, data });
    } catch (error) {
        console.log(error);
    }
};
