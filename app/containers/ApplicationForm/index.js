import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { deleteApplication } from 'containers/App/actions';
import { submitNew, submitEdit } from './actions';
import saga from './saga';

import reducer from './reducer';
import ApplicationForm from './ApplicationForm';
import { makeSelectApplications } from '../App/selectors';

const mapDispatchToProps = (dispatch) => ({
  addApplication: (formData) => dispatch(submitNew(formData)),
  updateApplication: (prev, next) => dispatch(submitEdit(prev, next)),
  deleteApplication: (app) => dispatch(deleteApplication(app))
});

const mapStateToProps = createStructuredSelector({
  applications: makeSelectApplications()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'applicationForm', reducer });
const withSaga = injectSaga({ key: 'applicationManager', saga });

export default compose(withReducer, withSaga, withConnect)(ApplicationForm);
// export default compose(withReducer, withConnect)(ApplicationForm);
export { mapDispatchToProps };
