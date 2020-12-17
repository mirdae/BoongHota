import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MapPage from './components/MapPage/Container';

function App() {
  return (
    <div className="App">
      <Router>
        <h2>어디있니 붕호타</h2>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/map/:id" component={MapPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
