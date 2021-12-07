import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const customMiddleware = (store) => (nextRunner) => (action) => {
  console.log('액션 객체', action);
  console.log('리듀서 실행 전', store.getState());
  const result = nextRunner(action);
  console.log('리듀서 실행 후', store.getState());
  return result;
};

export default (initStates) =>
  // createStore(combineReducers(reducers), initStates, composeWithDevTools());
  createStore(combineReducers(reducers), initStates, applyMiddleware(customMiddleware));
