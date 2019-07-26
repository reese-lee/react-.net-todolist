import React, { useState, useEffect } from 'react';
import CategoriesList from './CategoriesList';
import NewCategoryForm from './NewCategoryForm';
import CategoryDetail from './CategoryDetail';
import NewToDoForm from './NewToDoForm';
import { Switch, Route, withRouter } from 'react-router-dom';
import './styles.css';
import Header from './Header';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const getData = async () => {
  const response = await fetch('/api/Data/GetCategories');

  const categories = await response.json();
  return categories;
};

function App(props) {
  

  const [category, setCategory] = useState([]);
  
  useEffect(() => {
    getData().then(list => {
      setCategory(list)
    })
  }, [])
  
  console.log(category);  
  
    return (
      <div className="container">
        <Header currentRouterPath={props.location.pathname}/>
        <Switch>
          <Route exact path='/' render={()=><CategoriesList categoryList={props.categoryList}/>} />
          <Route exact path='/new-category' render={()=><NewCategoryForm />} />
          {/* <Route path={`/:categoryName`} render={({match})=><Category />}/> */}
          <Route exact path={`/:categoryName/:categoryId`} component={CategoryDetail} />
          <Route exact path={`/:categoryName/:categoryId/new-to-do`} component={NewToDoForm} />
        </Switch>
      </div>
    );
  }


const mapStateToProps = state => {
  return {
    categoryList: state.categoryList
  }
}

export default withRouter(connect(mapStateToProps)(App));

App.propTypes = {
  categoryList: PropTypes.object
}