import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostPage from './../PostPage/index';
import SignInPage from './../SignInPage/index';
import SignUpPage from './../SignUpPage/index';
import NotFoundPage from './../NotFoundPage/index';
import PostDetailPage from './../PostDetailPage/index';
import * as path from './../../constants/configPath';
class AppContent extends Component {
  render() {
    console.log(this.props);
    return (
      <Router>
        <Switch>
          <Route exact component={path.HOME} component={PostPage} />
          <Route path={path.POST} component={PostPage} />
          <Route path={path.SIGNIN} component={SignInPage} />
          <Route path={path.POSTDETAIL} component={PostDetailPage} />
          <Route path={path.SIGNUP} component={SignUpPage} />
          <Route path={path.NOTFOUND} component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}
export default AppContent;