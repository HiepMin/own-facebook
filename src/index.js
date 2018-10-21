import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from './configureStore';

import App from './containers/App/index';
import SignInPage from './containers/SignInPage/index';
import SignUpPage from './containers/SignUpPage/index';
import NotFoundPage from './containers/NotFoundPage/index';
import PostPage from './containers/PostPage/index';
import PostDetailPage from './containers/PostDetailPage/index';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as path from './constants/configPath';

import 'fontisto/css/fontisto/fontisto.min.css';
import './styles/main.scss';

const NODE_MOUNT = document.getElementById('root');
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact component={PostPage} path={path.HOME} />
                    <Route path={path.SIGNIN} component={SignInPage} />
                    <Route path={path.SIGNUP} component={SignUpPage} />
                    <Route path={path.POSTDETAIL} component={PostDetailPage} />
                    <Route path={path.NOTFOUND} component={NotFoundPage} />
                </Switch>
            </Router>
        </Provider>,
        NODE_MOUNT
    );
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
})
