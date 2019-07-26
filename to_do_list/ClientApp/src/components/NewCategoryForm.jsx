import React from 'react';

const saveData = async (formData) => {
    console.log(formData)
    const response = await fetch('/api/Data/SaveCategory', {
        method: 'POST',
        body: formData
    });
    const number = await response.json();
    console.log(number)
    return number;
}


function NewCategoryForm() {
    let _name = null

    function handleFormSubmission(event) {
       event.preventDefault()
       let formData = new FormData();
       let name = _name.value
       formData.append('catName', name)
        saveData(formData);
        console.log(name)
    }

    return (
        <div>
            <h1>new category form</h1>
            <form onSubmit={handleFormSubmission}>
                <label
                    type="text"
                    id="name"
                    name="name"
                >Category Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    ref={(input) => { _name = input }} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default NewCategoryForm;
