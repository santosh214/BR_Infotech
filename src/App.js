import './App.css';
import Menu from './component/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router ,Switch ,Route} from 'react-router-dom'
import Register from './component/Register';
import Login from './component/Login';
import Home from './component/Home';
function App() {
  return (
    <Router>
      
    <div className="App">
                <Menu/>
                <Switch>
                  <Route component={Register} path="/register"></Route>
                  <Route component={Login} path="/login"></Route>
                  <Route component={Home} path="/home"></Route>
                </Switch>

    </div>
    </Router>
  );
}

export default App;
