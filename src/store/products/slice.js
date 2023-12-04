import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: null,
    loading: false,
    error: '',
};

// slice
export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchAll(state) {
            const stateData = { ...state };
            stateData.loading = true;
            return stateData;
        },
        fetchAllSucceeded(state, action) {
            const stateData = { ...state };

            const products =
                action.payload.skip === 0
                    ? action.payload.products
                    : [
                          ...stateData.data?.products,
                          ...action?.payload?.products,
                      ];

            stateData.data = { ...action.payload, products };
            stateData.loading = false;
            return stateData;
        },
        fetchAllFailure(state, action) {
            const stateData = { ...state };
            stateData.data = null;
            stateData.error = action.payload;
            stateData.loading = false;
            return stateData;
        },
    },
});

// Actions
export const productsActions = {
    fetchAll: productsSlice?.actions?.fetchAll,
    fetchAllSucceeded: productsSlice?.actions?.fetchAllSucceeded,
    fetchAllFailure: productsSlice?.actions?.fetchAllFailure,
};

// Selectors
export const selectProducts = state => state.products.data;

// Reducer
export default productsSlice.reducer;
