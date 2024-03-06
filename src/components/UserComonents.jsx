import React from "react";
import { View, Text, StyleSheet, Image, Platform } from "react-native";
import { SearchProductButton } from "./ButtonsComponents";

// COMPONENTS
const UserCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.uiandname}>
                <View style={styles.uimgcontainer}>
                    <Image
                        source={{ uri: "https://picsum.photos/300/300" }}
                        style={styles.uphoto}
                    />
                </View>
                <View style={styles.utext}>
                    <Text style={styles.utitle}>User</Text>
                    <Text style={styles.umessage}>Bienvenido</Text>
                </View>
            </View>

            <SearchProductButton />
        </View>
    );
}


// STYLES
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "95%",
        minHeight: 100,
        maxHeight: 120,
        backgroundColor: "#000000d8",
        padding: 10,
        borderRadius: 25,
        margin: "3%",
        
    },
    utext: {
        paddingHorizontal: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    uiandname: {
        flexDirection: "row",
        alignItems: "center",
        textAlign: "left"
    },
    utitle: {
        color: "#e3e3e3",
        textAlign: "left",
        fontSize: 20,
        fontWeight: "bold"
    },
    umessage: {
        color: "#acacac",
        fontSize: 16,
        textAlign: "center",
    },
    uimgcontainer: {
        overflow: "hidden",
        ...Platform.select({
            ios: {
                padding: 10,
                shadowColor: "#e1b461",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.35,
                shadowRadius: 4.84,
            },
            android: {
                margin: 10,
                borderRadius: 100,
                shadowColor: "#e1b861",
                elevation: 6,
            },
        }),
    },
    uphoto: {
        width: 50,
        height: 50,
        ...Platform.select({
            ios: {
                borderRadius: 100,
            },
        }),
    }
});

// EXPORTS
export { UserCard }
