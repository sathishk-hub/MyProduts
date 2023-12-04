import { all, fork } from 'redux-saga/effects';

import productsWatcherSaga from '../products/saga';

export function* rootSaga() {
    yield all([fork(productsWatcherSaga)]);
}

export default rootSaga;
