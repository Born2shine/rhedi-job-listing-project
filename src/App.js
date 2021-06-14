import React from "react";
import './assets/css/main.css';
import './assets/css/job-details.css'
import Home from "./components/Home"
import JobDetails from "./components/JobDetails"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Error from "./components/Error";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/job-details/:id" children={< JobDetails/>}/>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
