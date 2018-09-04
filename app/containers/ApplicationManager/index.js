import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
// import injectSaga from 'utils/injectSaga';
// import {} from 'containers/App/selectors';
// import saga from './saga';
import reducer from './reducer';
import ApplicationManager from './ApplicationManager';

const mapDispatchToProps = () => ({
});

const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'applicationManager', reducer });
// const withSaga = injectSaga({ key: 'home', saga });

// export default compose(withReducer, withSaga, withConnect)(HomePage);
export default compose(withReducer, withConnect)(ApplicationManager);
export { mapDispatchToProps };
