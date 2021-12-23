import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PagesRender from './PagesRender'
import Header from './components/global/Header'
import Footer from './components/global/Footer'

const App = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={PagesRender} />
          <Route exact path="/:page" component={PagesRender} />
          <Route exact path="/:page/:slug" component={PagesRender} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
