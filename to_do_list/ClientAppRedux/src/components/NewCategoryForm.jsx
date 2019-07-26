import React from 'react';
import { connect } from 'react-redux'
import { v4 } from 'uuid';

function NewCategoryForm(props) {
    let _name = null

    function handleFormSubmission(event) {
        const { dispatch } = props;
        event.preventDefault()
        const action = {
            type: 'ADD_CATEGORY',
            name: _name.value,
            id: v4()
        };
        dispatch(action);
        _name.value = ''
    }

    return (
        <div>
            <form onSubmit={handleFormSubmission}>
                <label
                    type="text"
                    id="name"
                >Category Name</label>
                <input
                    type="text"
                    id="name"
                    ref={(input) => { _name = input }} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default connect()(NewCategoryForm);
