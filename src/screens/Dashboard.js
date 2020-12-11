import React, { useEffect } from 'react';
import { DrawerActions } from '@react-navigation/native';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BottomTab from '../navigation/BottomTab';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label="Home"
            // onPress={() => props.navigation.navigate("Home")}
            />

            <DrawerItem
                label="Social"
            // onPress={() => props.navigation.navigate("Social")}
            />

            <DrawerItem
                label="Sign Out"
                labelStyle={{ color: "red" }}
            // onPress={() => hanldeLogoutPress(props)}
            />
        </DrawerContentScrollView>
    );
}

async function hanldeLogoutPress(props) {
    try {
        await AsyncStorage.removeItem("loggedUserEmail");
        await AsyncStorage.removeItem("loggedUserId");

        console.log("successfully logged out");

        //redirecring to ladnding page
        props.navigation.push("Landing");
    }
    catch (exception) {
        console.log("failed to log out");
    }
}

function Dashboard({ navigation }) {
    useEffect(
        () =>
            navigation.addListener('beforeRemove', (e) => {
                // Prevent default behavior of leaving the screen
                e.preventDefault();
                console.log("back pressed");
            }),
        []
    );

    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={BottomTab} />
        </Drawer.Navigator>
    )
}

export default Dashboard;