/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Provider } from 'react-redux';
import React from 'react';
import AppRoutes from './src/routes';
import store from './src/store/root/config.store';

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    );
}

export default App;
