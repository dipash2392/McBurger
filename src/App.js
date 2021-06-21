import React from "react";
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Menu from './components/Menu/Menu';



function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={Menu} exact />
        <Redirect to="/" />
      </Switch>
      </React.Fragment>
      
  );
}

export default App;
