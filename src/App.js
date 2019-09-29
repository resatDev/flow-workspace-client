import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import landing from './containers/landing';
import EmployeeLogin from './components/login/employeeLogin';
import Index from './containers/admin/index';
import test from './test';
import FlowBuilder from './containers/flowBuilder';
import EmployeePage from './containers/employeePage';
function App() {
  return (
    <div className="App">
     <Router>
       <Route exact path="/" component={landing} />
       <Route exact path="/login" component={EmployeeLogin} />
       <Route exact path="/flow-main-page" component={Index} />
       <Route exact path="/test" component={test}></Route>
       <Route exact path="/flow/:flow_id" component={FlowBuilder} />
       <Route exact path="/employee-page" component={EmployeePage} />
     </Router>
    </div>
  );
}

export default App;
