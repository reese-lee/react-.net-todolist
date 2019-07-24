import React from 'react';
import { connect } from 'react-redux'
import { v4 } from 'uuid';

function NewToDoForm(props) {
  let categoryId = props.match.params.categoryId
  let categoryName = props.match.params.categoryName

  let _task = null
  let _dueDate = null

  function handleFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault()
    const action = {
        type: 'ADD_TODO',
        task: _task.value,
        dueDate: _dueDate.value,
        isComplete: false,
        categoryId: categoryId,
        categoryName: categoryName,
        id: v4()
    };
    dispatch(action);
    _task.value = ''
    _dueDate.value = ''
}

  return (
    <div>
      <h2>new to do item</h2>
      <form onSubmit={handleFormSubmission}>
          <label
              type="text"
              id="task"
          >Task</label>
          <input
              type="text"
              id="task"
              ref={(input) => { _task = input }} /><br></br>
          <label
              type="text"
              id="dueDate"
          >Due Date</label>
          <input
              type="date"
              id="dueDate"
              ref={(input) => { _dueDate = input }} /><br></br>
          <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default connect()(NewToDoForm);