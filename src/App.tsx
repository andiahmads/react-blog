import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import PagesRender from './PagesRender'

const App=() => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={PagesRender}/>
          <Route exact path="/:page" component={PagesRender}/>
          <Route exact path="/:page/:slug" component={PagesRender}/>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
