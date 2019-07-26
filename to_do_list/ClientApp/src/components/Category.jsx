import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Category(props) {

  return (
    <div>
      <Link to={`/${props.name}/${props.id}`}>{props.name}</Link>
      <br></br> 
    </div>
  );
}

export default Category;

Category.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  // currentRouterPath: PropTypes.string.isRequired
}




