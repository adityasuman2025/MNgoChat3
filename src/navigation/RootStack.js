import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from "../screens/Landing";
import Login from "../screens/Login";

const Stack = createStackNavigator();
export default function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false, }} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}