import SignUpContent from './content';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';

const withForm = reduxForm({
  form: 'SignUpForm',
})
export default compose(
  withForm
)(SignUpContent);