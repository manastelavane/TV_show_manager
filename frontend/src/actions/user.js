import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const formData = {
            email: 'narendra@gmail.com',
            password: 'narendra'
        };
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        navigate('/home');
    } catch (error) {
        console.log(error.response.data.message);
    }
};
