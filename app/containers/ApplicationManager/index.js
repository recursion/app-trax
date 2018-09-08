import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { deleteApplication, addApplication, updateApplication } from 'containers/App/actions';
// import injectSaga from 'utils/injectSaga';
// import saga from './saga';
import reducer from './reducer';
import ApplicationManager from './ApplicationManager';
import { makeSelectApplications } from '../App/selectors';

const mapDispatchToProps = (dispatch) => ({
  addApplication: (app) => dispatch(addApplication(app)),
  updateApplication: (app) => dispatch(updateApplication(app)),
  deleteApplication: (app) => dispatch(deleteApplication(app))
});

const mapStateToProps = createStructuredSelector({
  applications: makeSelectApplications()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'applicationManager', reducer });
// const withSaga = injectSaga({ key: 'applicationManager', saga });

// export default compose(withReducer, withSaga, withConnect)(ApplicationManager);
export default compose(withReducer, withConnect)(ApplicationManager);
export { mapDispatchToProps };
