import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootStack from './RootStack';

function AppRoutes() {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
}

export default AppRoutes;
