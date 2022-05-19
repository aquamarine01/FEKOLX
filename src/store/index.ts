import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import { applyInterceptors } from './axios';

// @ts-ignore
const rootReducers = combineReducers(reducers);
const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),
    // @ts-ignore
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

export const dispatch = store.dispatch;

applyInterceptors(dispatch);
export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducers>;
