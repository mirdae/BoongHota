import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import MapPage from './components/MapPage';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Link to="/">
            <img
              src="https://media.vlpt.us/images/dolarge/post/0f4e3ed7-c07c-4e48-afea-dba71b3b306b/logo.png"
              alt="logo"
            />
          </Link>
        </header>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/map/:id" component={MapPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
