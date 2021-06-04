import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NotProtectedUserPage from "./components/NotProtectedUserPage";
import ProtectedUserPage from "./components/ProtectedUserPage";
import NotAuthorized from "./components/NotAuthorized";
import './App.css';
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/protected' component={ProtectedUserPage} />
          <Route path="/unauthorized">
            <NotAuthorized />
          </Route>
          <Route path="/">
            <NotProtectedUserPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
