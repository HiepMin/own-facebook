import loadable from 'react-loadable';
import loading from './../../components/Loading/index';

export default loadable({
    loader: () => import('./container'),
    loading,
});