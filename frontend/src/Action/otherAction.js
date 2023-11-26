import {
    CONTACT_USER_REQUEST,
    CONTACT_USER_SUCCESS,
    CONTACT_USER_FAIL,
    CLEAR_ERRORS,
} from '../Constant/otherConstant';
import axios from 'axios';

// Contact

export const contact = (userData) => async (dispatch) => {
    try {
        dispatch({ type: CONTACT_USER_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } }

        const { data } = await axios.post(`/api/v1/user/contact`, userData, config);

        dispatch({ type: CONTACT_USER_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({
            type: CONTACT_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};