import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/home/home";
import SignIn from "./components/signin/signIn";
import SignUp from "./components/signup/signUp";
import Analytics from "./components/analytics/analytics";
import Dashboard from "./components/dashboard/Dashboard";
import Machines from "./components/machines/machines";
import Employees from "./components/employes/Employs";
import Transactions from "./components/transactions/transactions";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/analytics" exact component={Analytics} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/machines" exact component={Machines} />
          <Route path="/employees" exact component={Employees} />
          <Route path="/transactions" exact component={Transactions} />
          <Redirect to="/dashboard" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
