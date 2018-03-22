import { createStore, applyMidleware } from 'redux';
import thunkMidleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducer';

cont loggerMidleware = createLogger();

export const store = createStore(
  rootReducer,
  applyMidleware(
    thunkMidleware,
    loggerMidleware
  )
);
