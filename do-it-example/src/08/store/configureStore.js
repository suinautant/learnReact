import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { SET_TRANSACTION_LIST } from '../actions/transactionActions';
import reducers from '../reducers';

const customMiddleware = (store) => (nextRunner) => (action) => {
  console.log('미들웨어에 전달된 액션 객체', action);
  console.log('리듀서 실행이전', store.getState());
  const result = nextRunner(action);
  console.log('리듀서 실행이후', store.getState());
  return result;
};

const customMidleware1 = () => (nextRunner) => (action) => {
  if (action.type === SET_TRANSACTION_LIST) {
    return nextRunner({
      ...action,
      payload: [
        {
          id: 0,
          code: 'DOIT',
          name: '두잇코인(DOIT)',
          totalPrice: 100000000,
          currentPrice: 25000,
          datetime: '현재시간',
        },
      ],
    });
  }
  return nextRunner(action);
};

const customMiddleware2 = (store) => (nextRunner) => (action) => {
  console.log('미들웨어2 전달된 액션 객체', action);
  console.log('미들웨어2 실행이전', store.getState());
  const result = nextRunner(action);
  console.log('미들웨어2 실행이후', store.getState());
  return result;
};

export default (initState) =>
  createStore(
    combineReducers(reducers),
    initState,
    composeWithDevTools(applyMiddleware(customMiddleware, customMiddleware2)),
  );
