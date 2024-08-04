import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './AppNavigation.js'

    const App = () => {

        return (
            <NavigationContainer>
                <AppNavigator/>
                <StatusBar style='dark'/>
            </NavigationContainer>

        )
    }

// Use next.js page for the mobile app
export default App;