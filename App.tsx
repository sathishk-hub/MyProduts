/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import React from 'react';

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Text>Hello Sathish</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default App;
