import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

function CategoriesList(props) {
  return (
    <div>
      <h2>Categories</h2>
      {props.categories.map(category =>
        {
          return <Category name={category.name} 
          id={category.id}
          key={category.id} />
          })}
    </div>
  );
}

export default CategoriesList;

CategoriesList.propTypes = {
  categories: PropTypes.array
}
