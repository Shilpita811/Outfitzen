import {
    CONTACT_USER_REQUEST,
    CONTACT_USER_SUCCESS,
    CONTACT_USER_FAIL,
    CLEAR_ERRORS,
} from '../Constant/otherConstant';

export const otherReducer = (state={}, action) => {
    switch (action.type) {
        case CONTACT_USER_REQUEST:
            return {
                loading: true,
            };
        case CONTACT_USER_SUCCESS:
            return{
                loading: false,
            }
        case CONTACT_USER_FAIL:
            return{
                loading: false,
                error: action.payload,
            }
            case CLEAR_ERRORS:
                return {
                  ...state,
                  error: null,
                };
          
              default:
                return state;
    }
}