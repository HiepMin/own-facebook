import PostContent from './content';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Act_CreatePosts } from './actions';
import withFirestoreHOC from './../../components/HOC/withFirestore';
const mapStateToProps = state => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile,
})
const mapDispatchToProps = dispatch => ({
    CreatePost: post => dispatch(Act_CreatePosts(post)),
})
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
    withConnect,
    withFirestoreHOC('posts'),
)(PostContent);