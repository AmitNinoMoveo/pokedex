import { ThunkAction, Action, createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import appReducers from './reducers';

export const store = createStore(
  appReducers,
  {},
  applyMiddleware(thunk)
);

export type AppDispatch = typeof store.dispatch;
export type RootState =  ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
