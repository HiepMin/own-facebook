import SignInContent from './content';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Act_Login } from './action';
const mapStateToProps = state => ({
  auth: state.firebase.auth,
})
const mapDispatchToProps = dispatch => {
  return {
    Login: credentials => dispatch(Act_Login(credentials)),
  }
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withForm = reduxForm({
  form: 'SignInForm',
  field: ['email', 'password'],
})
export default compose(
  withForm,     
  withConnect,
)(SignInContent);