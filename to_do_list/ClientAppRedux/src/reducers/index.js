import categoryReducer from './category-reducer';
import todoReducer from './todo-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todoList: todoReducer,
    categoryList: categoryReducer
})

export default rootReducer;