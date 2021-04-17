import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

const Task = lazy(() => import('./pages/taskPage'));

const App = props => {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <NavLink to='/tasks/'>Tasks</NavLink>
          </li>
        </ul>

        <Suspense fallback='App loading...'>
          <Switch>
            <Route exact path='/' />
            <Route path='/tasks/' component={Task} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
