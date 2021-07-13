import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers} from 'redux';
import {arrayReducer} from './reducers/arrayReducers'
const rootReducer= combineReducers({
    arrayReducer:arrayReducer
});

export default createStore(rootReducer,applyMiddleware(thunk));