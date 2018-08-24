import * as React from 'react'
import { Switch } from 'react-router'
import { Redirect, Route} from 'react-router-dom'

import AccountDetails from './components/account/AccountDetails'
import NewAccount from './components/account/NewAccount'

import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

import Header from './components/Header'
import Home from './components/Home'

import * as NewTransaction from './components/transaction/NewTransaction'
import * as TransactionSummary from './components/transaction/TransactionSummary'

import './App.css';

let isAuthenticated:boolean = false;

function setAuthentication(value:boolean) {
  isAuthenticated = value;
};

const PrivateRoute = ({component:Component, ...rest}: any) => (
    <Route {...rest} render={PrivateRender(Component)} />
  );

const PrivateRender = (Component: any) => {
    return (props: any) => {
      if (isAuthenticated === true) {
        setAuthentication(false)
        return <Component {...props} />
      } else {
        return <Redirect to='/signin'/>
      }
    };
  };

class App extends React.Component {

  public render() {
    return (
      <div>
        <Header />
        
        <div className="container">
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/signin" component={SignIn}/>
          <PrivateRoute exact={true} path="/account/new" component={NewAccount}/>
          <PrivateRoute path="/account/:name" component={AccountDetails} />
          <PrivateRoute path="/transaction/:id" component={TransactionSummary} />
          <PrivateRoute exact={true} path="/transaction/new" component={NewTransaction} />
        </Switch>
      </div>
      </div>
    );
  }
}

export default App;
