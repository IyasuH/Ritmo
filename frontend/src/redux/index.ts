import createSagaMiddleware from 'redux-saga';
import { Tuple, configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger'
import rootReducers from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducers,
    middleware: ()=> new Tuple(sagaMiddleware, logger),
});

//  here starting the middleware and running root saga
sagaMiddleware.run(rootSaga)

export default store;