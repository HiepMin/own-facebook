import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
const withAuthorization = propname  => {
    class Authorization extends Component {
        render(){
            console.log(this.props['auth']);
            return (
                <Fragment>
                    {/* { 
                        (this.props['auth'].uid) && <Redirect to={propname['redirectTo']} /> 
                    } */}
                </Fragment>
            );
        }
    }
    return compose(withConnect)(Authorization);
}
const mapStateToProps = state => ({
    auth: state.firebase.auth,
})
const withConnect = connect(mapStateToProps, null);
export default withAuthorization;
