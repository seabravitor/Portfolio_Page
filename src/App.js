import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NAVIGATION from './NAVIGATION';
import PORTFOLIO from './PORTFOLIO';
import FOOTER from './FOOTER';
import RESUME from './RESUME'
import ABOUT from './ABOUT';

function App() {
return (    
  <div className="App">
    <div class="background">
      <Router>
          <div class="stickybefore"><NAVIGATION /></div>
          <Switch>
            <Route path="/" exact component={() => <PORTFOLIO />} />
            <Route path="/resume" exact component={() => <RESUME/>} /> 
            <Route path="/about" exact component={() => <ABOUT />} />
        </Switch>
        <FOOTER />
      </Router>
    </div>
  </div>
);
}

export default App;
