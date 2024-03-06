import React, { useState } from "react";
import { View, StatusBar, StyleSheet, Text } from 'react-native';

export default function BagView() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

        
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#100303"
    }
});