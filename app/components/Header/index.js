import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLocation } from 'containers/App/selectors';
// import injectReducer from 'utils/injectReducer';
// import injectSaga from 'utils/injectSaga';
// import saga from './saga';
// import reducer from './reducer';
import Header from './Header';

const mapDispatchToProps = () => ({
});

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({ key: 'header', reducer });
// const withSaga = injectSaga({ key: 'applicationManager', saga });

// export default compose(withReducer, withSaga, withConnect)(ApplicationManager);
export default compose(withConnect)(Header);
export { mapDispatchToProps };
