import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserCard } from '../components/UserComonents';
import { LinearGradient } from 'expo-linear-gradient';
import { FilterProduct, OffertProduct } from '../components/ProductComponents';
import { useNavigation } from '@react-navigation/native';

const HomeView = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <LinearGradient
                colors={['#432e22', '#0d0907']}
                style={styles.container}
            >
                <UserCard />
                <ScrollView style={styles.scroll}>
                    <OffertProduct/>
                    <FilterProduct/>
                    <OffertProduct/>
                    <FilterProduct/>
                    <OffertProduct/>
                    <FilterProduct/>
                    <OffertProduct/>
                    <FilterProduct/>
                </ScrollView>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#be8360'
    },
    contnet: {
        flex: 1,
        paddingTop: "12%",
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: "space-between"
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    scroll:{
        flex: 1,
        width:"100%",
        backgroundColor: "transparent"
    }
});

export default HomeView;
