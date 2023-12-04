import { call, put, takeEvery } from 'redux-saga/effects';

import getAllProducts from '../../services/products/products.api';
import { productsActions } from './slice';

// Worker Sagas
export function* onGetAllProducts(action) {
    try {
        const products = yield call(getAllProducts, action?.payload);
        yield put(productsActions.fetchAllSucceeded(products));
    } catch (e) {
        if (e instanceof Error) {
            yield put(productsActions.fetchAllFailure(e.message.toString()));
        }
    }
}

// Watcher Saga
function* productsWatcherSaga() {
    yield takeEvery(productsActions.fetchAll.type, onGetAllProducts);
}

export default productsWatcherSaga;
