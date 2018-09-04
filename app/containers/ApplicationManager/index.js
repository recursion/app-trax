import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { addApplication } from 'containers/App/actions';
// import injectSaga from 'utils/injectSaga';
import { makeSelectShowNewApplicationInput } from './selectors';
// import saga from './saga';
import reducer from './reducer';
import ApplicationManager from './ApplicationManager';
import { toggleNewApplicationInput } from './actions';
import { makeSelectApplications } from '../App/selectors';

const mapDispatchToProps = (dispatch) => ({
  toggleShowNewApplicationInput: () => dispatch(toggleNewApplicationInput()),
  addApplication: (app) => dispatch(addApplication(app))
});

const mapStateToProps = createStructuredSelector({
  showNewApplicationInput: makeSelectShowNewApplicationInput(),
  applications: makeSelectApplications()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'applicationManager', reducer });
// const withSaga = injectSaga({ key: 'home', saga });

// export default compose(withReducer, withSaga, withConnect)(HomePage);
export default compose(withReducer, withConnect)(ApplicationManager);
export { mapDispatchToProps };
