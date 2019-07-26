import React, { useState, useEffect } from 'react';
import CategoriesList from './CategoriesList';
import NewCategoryForm from './NewCategoryForm';
import CategoryDetail from './CategoryDetail';
import NewToDoForm from './NewToDoForm';
import { Switch, Route } from 'react-router-dom';
import './styles.css';
import Header from './Header';

const getData = async () => {
  const response = await fetch('/api/Data/GetCategories');

  const categories = await response.json();
  return categories;
};

function App(props) {
  

  const [categoryList, setCategoryList] = useState([]);
  
  useEffect(() => {
    getData().then(list => {
      setCategoryList(list)
    })
  }, [])
  
  console.log(categoryList);  
  
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route exact path='/' render={()=><CategoriesList categories={categoryList}/>} />
          <Route exact path='/new-category' render={()=><NewCategoryForm />} />
          <Route exact path={`/:categoryName/:categoryId`} component={CategoryDetail} />
          <Route exact path={`/:categoryName/:categoryId/new-to-do`} component={NewToDoForm} />
        </Switch>
      </div>
    );
  }

export default App;
