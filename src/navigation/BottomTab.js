import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import HomeStack from './HomeStack';
// import MyQuizStack from './MyQuizStack';
// import Profile from '../screens/Profile';

import Login from '../screens/Login';
import Register from '../screens/Register';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Login}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#009387',
                    // tabBarIcon: ({ color }) => (
                    //     <Icon name="ios-home" color={color} size={26} />
                    // ),
                }}
            />
            <Tab.Screen
                name="My Quizzes"
                component={Register}
                options={{
                    tabBarLabel: 'My Quizzes',
                    tabBarColor: '#1f65ff',
                    // tabBarIcon: ({ color }) => (
                    //     <Icon name="ios-document" color={color} size={26} />
                    // ),
                }}
            />
            {/* <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: '#694fad',
                    // tabBarIcon: ({ color }) => (
                    //     <Icon name="ios-person" color={color} size={26} />
                    // ),
                }}
            /> */}
        </Tab.Navigator>
    );
}