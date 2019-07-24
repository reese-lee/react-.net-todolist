import todoReducer from './../../reducers/todo-reducer';

describe("todoReducer", () => {

    let action;
    const sampleToDoData = {
        task: 'Find Companies to Work for',
        dueDate: '11/09/1990',
        isComplete: false,
        categoryId: '1',
        categoryName: 'Job Search',
        id: 0
    }

    test('Should return default state if no action type is recognized', () => {
        expect(todoReducer({}, { type: null})).toEqual({});
    })

    test('Should add new todo data to todoList', () => {
        const { task, dueDate, isComplete, categoryId, categoryName, id } = sampleToDoData;
        action = {
            type: 'ADD_TODO',
            task: task,
            dueDate: dueDate,
            isComplete: isComplete,
            categoryId: categoryId,
            categoryName: categoryName,
            id: id
        }
        expect(todoReducer({}, action)).toEqual({
            [id] : {
                task: task,
                dueDate: dueDate,
                isComplete: isComplete,
                categoryId: categoryId,
                categoryName: categoryName,
                id: id
            }
        })
    })

})
