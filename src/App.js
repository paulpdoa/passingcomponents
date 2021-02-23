import Navigation from './Components/Navigation'
import Heading from './Components/Heading'
import Shop from './Components/Shop';
import About from './Components/About'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import './index.css';

function App() {
  return (
    <div className="Main">
    <Router>
      <Navigation/>
        <Switch>
          <Route path="/" exact component={Heading}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/about" exact component={About}/>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
