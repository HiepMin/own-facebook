import AppContent from './content';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export default compose(
    withRouter,
    connect(state => state)
)(AppContent);
