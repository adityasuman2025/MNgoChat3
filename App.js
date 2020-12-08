import 'react-native-gesture-handler';
import React from 'react';
import {
    StyleSheet,
    TouchableWithoutFeedback,
    View,
    StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from './src/navigation/RootStack';

function App() {
    return (
        <TouchableWithoutFeedback onPress={() => {
            //to remove the keyboard from screen when anywhere instead of textInput field is pressed  
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#35176d" translucent={true} />
                <NavigationContainer>
                    <RootStack />
                </NavigationContainer>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});

export default App;
