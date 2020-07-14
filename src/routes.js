import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import FindACar from './pages/FindACar';
import Detail from './pages/Detail';

export default function Routes() {
    return (
        
        <NavigationContainer>
            <StatusBar barStyle="light-content" backgroundColor="#005BA2" />
        
            <AppStack.Navigator headerMode="none">
                <AppStack.Screen name="Home" component={Home} />               
                <AppStack.Screen name="FindACar" component={FindACar} />               
                <AppStack.Screen name="Detail" component={Detail} />               
            </AppStack.Navigator>

        </NavigationContainer>
    );
}