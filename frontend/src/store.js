import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './Reducer/userReducer';
import { otherReducer } from './Reducer/otherReducer';





const reducer = combineReducers({
    user: userReducer,
    other: otherReducer,
});

let initialState={}

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;