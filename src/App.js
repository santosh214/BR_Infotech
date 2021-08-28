import './App.css';
import Menu from './Component/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router ,Switch ,Route} from 'react-router-dom'
import Register from './Component/Register';
import Login from './Component/Login';
function App() {
  return (
    <Router>
      
    <div className="App">
                <Menu/>
                <Switch>
                  <Route component={Register} path="/register"></Route>
                  <Route component={Login} path="/login"></Route>
                </Switch>

    </div>
    </Router>
  );
}

export default App;
