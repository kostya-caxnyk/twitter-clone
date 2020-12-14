import { rootReducer } from './rootReducer';
import { applyMiddleware, compose, createStore } from 'redux';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());
