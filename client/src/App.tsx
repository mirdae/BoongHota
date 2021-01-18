import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MapPage from './components/MapPage';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <header>
          <img
            src="https://media.vlpt.us/images/dolarge/post/0f4e3ed7-c07c-4e48-afea-dba71b3b306b/logo.png"
            alt="logo"
          />
        </header>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/map/:id" component={MapPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
