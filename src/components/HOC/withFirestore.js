import React from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Loading from './../Loading/index';

const withFirestoreHOC = propName => WrappedComponent => {
    class DataFirestore extends React.Component {
        render(){
            return (
                this.isEmpty(this.props[propName]) ? <Loading /> : <WrappedComponent {...this.props} />
            );
        }
        isEmpty = prop => {
            return (
                prop === null ||
                prop === undefined ||
                (prop.hasOwnProperty('length') && prop.lenght === 0) ||
                (prop.constructor === Object && Object.keys(prop).length === 0)
            );
        }
    }
    return compose(
        withFirestore,
        withConnect,        
    )(DataFirestore);
};
const mapStateToProps = state => ({
    posts: state.firestore.ordered.posts,
})
const withConnect = connect(mapStateToProps, null);
const withFirestore = firestoreConnect([
    { collection: 'posts' }
]);
export default withFirestoreHOC;
