import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const HeaderComponent = ({ name, navigation }) => {
    if (name === "HomeView" ) {
        return null;
    }
    else if (name === "BagView") {
        return (
            <View style={styles.header}>
                <TouchableHighlight style={styles.buttonNav} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={24} color="black" />
                </TouchableHighlight>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.spacer}></View>
            </View>
        );
    }
    return (
        <View style={styles.header}>
            <TouchableHighlight style={styles.buttonNav} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-outline" size={24} color="black" />
            </TouchableHighlight>
            <Text style={styles.title}>{name}</Text>
            <TouchableHighlight style={styles.buttonNav} onPress={() => navigation.navigate("SomeScreen")}>
                <Ionicons name="bag-handle-outline" size={24} color="black" backgroundColor="transparent"/>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '94%',
        height: Platform.OS === 'ios' ? '15%' : '15%',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        zIndex: 999,
        marginHorizontal: '4%',
        ...Platform.select({
            android: {
                elevation: 5,
            },
        }),
    },
    title: {
        paddingTop: 25,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0a0a0a',
        padding: 20,
        alignItems: "flex-end"
    },
    buttonNav: {
        backgroundColor: "#efefef",
        padding: 10,
        paddingHorizontal: 15,
        margin: "2%",
        borderRadius: 10,
        shadowColor: "#000",
        elevation: 5,
    },
    spacer:{
        padding: 10,
        paddingHorizontal: 15,
        margin: "6%",
    }
});

export { HeaderComponent }