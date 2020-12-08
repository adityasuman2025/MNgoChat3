import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from "../screens/Landing";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Dashboard from "../screens/Dashboard";

const Stack = createStackNavigator();
export default function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false, }} />

            <Stack.Screen name="Login" component={Login} options={{ headerShown: false, }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false, }} />
            <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false, }} />

        </Stack.Navigator>
    );
}