import categoryReducer from './../../reducers/category-reducer';

describe("categoryReducer", () => {

    let action;
    const sampleCategoryData = {
        name: 'Job Search',
        id: 0
    }

    test('Should return default state if no action type is recognized', () => {
        expect(categoryReducer({}, { type: null})).toEqual({});
    })

    test('Should add new category data to categoryList', () => {
        const { name, id } = sampleCategoryData;
        action = {
            type: 'ADD_CATEGORY',
            name: name,
            id: id
        }
        expect(categoryReducer({}, action)).toEqual({
            [id] : {
                name: name,
                id: id
            }
        })
    })

})