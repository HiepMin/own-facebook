import SignUpContent from './content';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { connect }  from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
};

const withForm = reduxForm({
  form: 'SignUpForm',
})
const withConnect = connect(mapStateToProps, null);
export default compose(
  withForm,
  withConnect,
  withRouter
)(SignUpContent);