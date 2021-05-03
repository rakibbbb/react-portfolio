import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contact from './components/Home/Contact/Contact';
import About from './components/Home/About/About';
import Home from './components/Home/Home/Home';
// import Skills from './components/Home/Skills/Skills';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          {/* <Route path="/skills">
            <Skills />
          </Route> */}
          <Route path="/">
          </Route>
          <Route path="/">
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
