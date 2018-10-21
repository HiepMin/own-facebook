import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// container
import PostPage from './../PostPage/index';
import SignInPage from './../SignInPage/index';
import SignUpPage from './../SignUpPage/index';
import NotFoundPage from './../NotFoundPage/index';
import PostDetailPage from './../PostDetailPage/index';
// components
// import Navbar from './../../components/Navbar/index';
import * as path from './../../constants/configPath';
// import { Button } from '@material-ui/core';
// import firebase from './../../firebase/config';
class AppContent extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact component={path.HOME} component={PostPage} />
            <Route exact path={path.POST} component={PostPage} />
            <Route exact path={path.SIGNIN} component={SignInPage} />
            <Route exact path={path.POSTDETAIL} component={PostDetailPage} />
            <Route exact path={path.SIGNUP} component={SignUpPage} />
            <Route exact path={path.NOTFOUND} component={NotFoundPage} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}
export default AppContent;