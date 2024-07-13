import todosReducer from './todos/reducer';
import filterReducer from './filters/reducer';
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    todos : todosReducer,
    filters: filterReducer
})