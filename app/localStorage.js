import { ADD_APPLICATION, UPDATE_APPLICATION } from './containers/App/constants';

export const saveToLocalStorageMiddleWare = ({ getState }) => (next) =>
  (action) => {
    // const prevState = getState().toJS();
    const returnValue = next(action);
    const nextState = getState().toJS();
    const target = nextState.global.applications;
    // const actionType = String(action.type);
    switch (action.type) {
      case ADD_APPLICATION:
      case UPDATE_APPLICATION:
        window.localStorage.setItem('applications', JSON.stringify(target));
        return returnValue;
      default:
        return returnValue;
    }
  };

// load applications state from localStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('applications');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
