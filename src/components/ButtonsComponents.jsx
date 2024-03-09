import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, TouchableHighlight, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};
const SellButton = () => {
    const [buttonPressed, setButtonPressed] = useState(false);

    const handlePressIn = () => {
        setTimeout(() => {
            setButtonPressed(true);
        }, 1);
    }

    const handlePressOut = () => {
        setButtonPressed(false);
    }

    return (
        <TouchableHighlight
            style={[
                styles.sbutton,
                {
                    backgroundColor: buttonPressed ? "transparent" : "#e1b461f8",
                    borderColor: '#e1b461f8',
                    borderWidth: 3,
                    elevation: 4,
                    shadowColor: "#e1b461f8",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.35,
                    shadowRadius: 10.84,
                },
            ]}
            onPress={() => { }}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            underlayColor="transparent"
        >
            <Text style={styles.buttonText}>Comprar</Text>
        </TouchableHighlight>
    );
}


const OffetButton = () => {
    const navigation = useNavigation();
    const [buttonPressed, setButtonPressed] = useState(false);

    const handlePress = () => {
        navigation.navigate('ProductView');
    };

    const handlePressIn = () => {
        setTimeout(() => {
            setButtonPressed(true);
        }, 1);
    };

    const handlePressOut = () => {
        setButtonPressed(false);
    };

    return (
        <TouchableHighlight
            style={[
                styles.obutton,
                {
                    backgroundColor: buttonPressed ? "transparent" : "#121212f8",
                    borderColor: '#121212f8',
                    borderWidth: 3,
                    elevation: 4,
                    shadowColor: "#000000f8",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.35,
                    shadowRadius: 10.84,
                },
            ]}
            onPress={handlePress} // Llama a handlePress directamente aquí
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            underlayColor="transparent"
        >
            <Text style={styles.ofbuttonText}>Comprar</Text>
        </TouchableHighlight>
    );
}


const FilertSelectButton = () => {
    const [buttonPressed, setButtonPressed] = useState(false);

    const handlePressIn = () => {
        setTimeout(() => {
            setButtonPressed(true);
        }, 1);
    };

    const handlePressOut = () => {
        setButtonPressed(false);
    };
    return(
        <TouchableHighlight
            style={[
                styles.fobutton,
                {
                    width: 100,
                    backgroundColor: buttonPressed ? "transparent" : "#bfc76b",
                    borderColor: '#bfc76b',
                    borderWidth: 3,
                    elevation: 4,
                    shadowColor: "#bfc76b",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.35,
                    shadowRadius: 10.84,
                },
            ]}
            onPress={() => { }}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            underlayColor="transparent"
        >
            <Text style={styles.ofbuttonText}>Comprar</Text>
        </TouchableHighlight>
    );
}


const SearchProductButton = () => {
    return (
        <TouchableHighlight style={styles.schbutton}>
            <Ionicons name="search-outline" size={20} color="#000000" />
        </TouchableHighlight>

    );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: "#007bff",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },
    ofbuttonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    },
    sbutton: {
        borderRadius: 15,
        padding: 10,
        margin: '3%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        elevation: 4,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.35,
        shadowRadius: 5.84,
    },
    obutton: {
        borderRadius: 15,
        padding: 10,
        margin: '3%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        elevation: 4,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.35,
        shadowRadius: 5.84,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#000',
    },
    schbutton:{
        backgroundColor: "#efefef",
        padding: 10,
        paddingHorizontal: 15,
        margin: "2%",
        borderRadius: 10,
        shadowColor: "#000",
        elevation: 5,
    },
    fobutton:{
        borderRadius: 15,
        padding: 10,
        margin: '3%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        elevation: 4,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.35,
        shadowRadius: 5.84,
    }
});

// EXPORTS
export { CustomButton, SellButton, SearchProductButton, OffetButton, FilertSelectButton };