import SignInContent from './content';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
const mapStateToProps = state => {
  return {
      state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    dispatch
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