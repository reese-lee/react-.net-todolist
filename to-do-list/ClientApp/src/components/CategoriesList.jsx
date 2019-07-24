import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

function CategoriesList(props) {
  return (
    <div>
      <h2>Categories</h2>
      {Object.keys(props.categoryList).map(categoryId =>
        {
          var category = props.categoryList[categoryId]
          return <Category name={category.name} 
          id={categoryId}
          key={categoryId} />
          })}
    </div>
  );
}

export default CategoriesList;

CategoriesList.propTypes = {
  categoryList: PropTypes.object
}
