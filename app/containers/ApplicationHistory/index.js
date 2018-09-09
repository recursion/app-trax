import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// import injectReducer from 'utils/injectReducer';
// import injectSaga from 'utils/injectSaga';
// import saga from './saga';
// import reducer from './reducer';
import ApplicationHistory from './ApplicationHistory';
import { makeSelectApplications } from '../App/selectors';

const mapDispatchToProps = () => ({
});

const mapStateToProps = createStructuredSelector({
  applications: makeSelectApplications()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({ key: 'applicationForm', reducer });
// const withSaga = injectSaga({ key: 'applicationManager', saga });

// export default compose(withReducer, withSaga, withConnect)(ApplicationManager);
export default compose(withConnect)(ApplicationHistory);
export { mapDispatchToProps };
