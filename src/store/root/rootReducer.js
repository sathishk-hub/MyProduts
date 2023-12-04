import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from '../products/slice';

const appReducer = combineReducers({
    products: productsReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
