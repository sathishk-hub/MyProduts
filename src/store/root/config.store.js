import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import reactotron from '../../libs/Reactotron/Reactotron';
import rootReducer from './rootReducer';
import { rootSaga } from './rootSaga';

const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                thunk: false,
                serializableCheck: false,
            }).concat(sagaMiddleware),
        devTools: __DEV__,
        enhancers: [reactotron.createEnhancer()],
    });

    sagaMiddleware.run(rootSaga);

    return store;
};

export default makeStore();
