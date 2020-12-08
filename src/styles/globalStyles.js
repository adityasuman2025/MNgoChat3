import { StyleSheet } from 'react-native';

import {
    THEME_PURPLE,
    LIGHT_GREY,
} from "../constants";

export const globalStyles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
        backgroundColor: "#fff",
    },

    logoImg: {
        width: 130,
        height: 120,
        // resizeMode: "contain",
    },

    logoTitle: {
        fontWeight: '700',
        fontSize: 20,
        letterSpacing: 0.1,
        color: LIGHT_GREY,
    },

    formInputField: {
        width: "85%",
        height: 45,
        borderRadius: 25,
        paddingHorizontal: 16,
        marginVertical: 10,
        fontSize: 16,
        color: LIGHT_GREY,
        backgroundColor: THEME_PURPLE,
    }
});

/*
    order: {
        position stuffs,
        flex stuffs,
        dimension/border,
        margin/padding,
        font-style,
        color,
        backgroundColor,
        others
    }
*/