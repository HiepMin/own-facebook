import AppContent from './content';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

export default compose(
    withRouter
)(AppContent);
