import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route component={() => <h1 style={{ textAlign: 'center' }}>404</h1>} />
    </Switch>
  </Router>
);

export default App;
