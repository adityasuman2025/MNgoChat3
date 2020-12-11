import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import {
    StyleSheet,
    View,
    StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import store from './src/store';
import RootStack from './src/navigation/RootStack';

function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#35176d" translucent={true} />
                <NavigationContainer>
                    <RootStack />
                </NavigationContainer>
            </View>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});

export default App;
