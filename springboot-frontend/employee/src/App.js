import React from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from '../src/components/ListEmployeeComponent';
import HeaderComponent from '../src/components/HeaderComponent';
import FooterComponent from '../src/components/FooterComponent';
import CreateEmployeeComponent from '../src/components/CreateEmployeeComponents.jsx';

import ViewEmployeeComponent from '../src/components/ViewEmployeeComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
