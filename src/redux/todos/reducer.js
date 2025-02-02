/* eslint-disable no-case-declarations */
import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, LOADED, TOGGLED } from "./actionTypes";
import { initialState } from "./initialState";

const todoMaxId = (todos)=>{
    const maxId = todos.reduce((maxId, todo)=>Math.max(todo.id, maxId), -1);
    return maxId + 1;
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADED:
            return action.payload;
            
        case ADDED:
            return [
              ...state,
              {
                id: todoMaxId(state),
                text: action.payload,
                completed: false,
              },
            ];
        case ALLCOMPLETED:
            return state.map(todo=>{
                return {
                    ...todo,
                    completed: true
                }
            })
        case CLEARCOMPLETED:
            return state.filter(todo=> !todo.completed)
        case TOGGLED:
            return state.map(todo=>{
                if(todo.id !== action.payload){
                    return todo
                }
                return{
                    ...todo,
                    completed: !todo.completed
                }
            })
        case COLORSELECTED:
            const {todoId, color} = action.payload;
            return state.map(todo=>{
                if(todo.id !== todoId){
                    return todo
                }
                return {
                    ...todo,
                    color: color
                }
            })
        case DELETED: 
            return state.filter(todo =>todo.id !== action.payload)
        default:
            return state
    }
};

export default reducer;