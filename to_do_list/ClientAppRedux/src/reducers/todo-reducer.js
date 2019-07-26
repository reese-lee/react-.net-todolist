export default( state = {}, action) => {
    let newState;
    const { task, dueDate, isComplete, categoryId, categoryName, id } = action
    switch (action.type) {
        case 'ADD_TODO':
            newState = Object.assign({}, state, {
                [id]: {
                    task: task,
                    dueDate: dueDate,
                    isComplete: isComplete,
                    categoryId: categoryId,
                    categoryName: categoryName,
                    id: id
                }
            });
            return newState;
        default:    
            return state;

    }
}