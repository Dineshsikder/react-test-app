import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExpenseTracker from './components/ExpenseTracker';

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" component={ExpenseTracker} />
    </Switch>
  </Router>
  );
}

export default App;
