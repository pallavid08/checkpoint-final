import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Routing
import PrivateRoute from './components/routing/PrivateRoute';

// Screens
import PrivateScreen from './components/screens/PrivateScreen';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import ResetPasswordScreen from './components/screens/ResetPasswordScreen';

import Header from './components/screens/Header';
import EntryForm from './components/screens/EntryForm';

import './App.css';

const App = () => {
   return (
      <Router>
         <div className="app">
            <Header />
            <Switch>
               <PrivateRoute exact path="/" component={PrivateScreen} />
               <Route exact path="/login" component={LoginScreen} />
               <Route exact path="/register" component={RegisterScreen} />
               <Route
                  exact
                  path="/forgotpassword"
                  component={ForgotPasswordScreen}
               />
               <Route
                  exact
                  path="/passwordreset/:resetToken"
                  component={ResetPasswordScreen}
               />
               <Route exact path="/entry" component={EntryForm} />
            </Switch>
         </div>
      </Router>
   );
};

export default App;
