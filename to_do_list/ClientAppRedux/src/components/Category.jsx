import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Category(props) {
  console.log(props)
  return (
    <div>
      <Link to={`/${props.name}/${props.id}`}>{props.name}</Link>
      <br></br> 
    </div>
  );
}

export default Category;

// Category.propTypes = {
//   categoryList: PropTypes.object,
//   currentRouterPath: PropTypes.string.isRequired
// }




