import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform, ImageBackground } from "react-native";
import { FilertSelectButton, OffetButton, SellButton } from "./ButtonsComponents";
import { LinearGradient } from "expo-linear-gradient";

//COMPONENTS
const ProductImg = () => {
    return (
        <View style={styles.imgcont}>
            <Image
                source={{ uri: "https://static.vecteezy.com/system/resources/previews/011/617/757/original/coffee-beans-in-bag-png.png" }}
                style={styles.pimage}
            />
        </View>

    );
}

const ProductAbout = () => {
    return (
        <View style={styles.tdetails}>
            <Text style={styles.ttitledetails}>Detalles de Producto</Text>
            <Text style={styles.txtdetails}>Sumérgete en la autenticidad de nuestro café artesanal en grano, envasado en una bolsa de tela confeccionada a mano. Con materiales de calidad y un diseño elegante, preservamos la frescura y el aroma de nuestros granos, brindando una experiencia única en cada taza.</Text>
        </View>
    );
}

const AmountProductComponent = ({ prices, handleAmountSelect, handleCoinSelect }) => {
    const [selectedAmount, setSelectedAmount] = useState(prices[0]);

    return (
        <View style={styles.tdetails}>
            <Text style={styles.ttitledetails}>Cantidad de Producto</Text>
            <View style={styles.pricesContainer}>
                {prices.map((price, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.priceItem,
                            selectedAmount === price && styles.selectedPriceItem,
                        ]}
                        onPress={() => { handleAmountSelect(price.price); setSelectedAmount(price); handleCoinSelect(price.coin) }}
                    >
                        <Text
                            style={[
                                styles.priceText,
                                selectedAmount.price === price.price && styles.priceTextSelected,
                            ]}
                        >
                            {price.amount} {price.unit}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const ProductDetails = ({ product }) => {
    return (
        <View style={styles.tdetails}>
            <Text style={styles.ttitledetails}>{product.name}</Text>
            <Text style={styles.txtdetails}>{product.brand}</Text>
        </View>
    );
}

const PriceBuyProductBar = ({ price, coin }) => {
    return (
        <View style={[styles.ppbar, styles.floatBar]}>
            <Text style={styles.priceTextBar}> {coin} {price}</Text>
            <SellButton />
        </View>
    );
}

const OffertProduct = () => {
    // Función para formatear el título con alternancia de colores cada dos espacios
    const formatTitle = (title) => {
        const words = title.split(' ');
        let formattedTitle = '';
        for (let i = 0; i < words.length; i++) {
            if (i > 0 && i % 2 === 0) {
                formattedTitle += ' ';
            }
            formattedTitle += words[i].toUpperCase() + ' ';
        }
        return formattedTitle.trim();
    };

    const getTitleColor = (index) => {
        return index % 4 < 2 ? "#ff8800" : "#000000";
    };

    return (
        <View style={styles.offertcont}>
            <ImageBackground
                style={styles.obackimage}
                source={{ uri: "https://scontent.flim3-2.fna.fbcdn.net/v/t1.6435-9/146181005_815902315659771_1198584830156563979_n.png?_nc_cat=104&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=jtn3SQmoUgEAX88L0Vr&_nc_ht=scontent.flim3-2.fna&oh=00_AfDfZ_DMcwbDPenPwz4Zj2x988wRu5lLb8WspIVcfRSCrQ&oe=660C3697" }}>
                <LinearGradient
                    colors={['#5e413123', '#da6827d8']}
                    style={styles.offertText}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <Text style={styles.ttitleoffert}>{formatTitle("Offerta por aniversario").split(' ').map((word, index) => (
                        <Text key={index} style={{ color: getTitleColor(index) }}>{word} </Text>
                    ))}</Text>
                    <Text style={styles.toffertdetails}>Granos de cafe naturales</Text>
                    <OffetButton />
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}


const FilterProduct = () => {
    return (
        <View>
            <ProductPresentation color={"#bfc76b"} />
        </View>
    );
}

const ProductPresentation = ({color}) => {
    return (
        <LinearGradient
            colors={['#000000', color]}
            start={{ x: 0.4, y: 0 }}
            end={{ x: 1, y: 3.6 }}
            style={[{ backgroundColor: "#191919" }, styles.pproduct]}>
            <View style={[{ backgroundColor: color }, styles.cimg]}>
                <Image
                    style={styles.ppimage}
                    source={{ uri: "https://cdn.sanity.io/images/yp7gcwn5/production/cbff105b181bd7e7db820cbce0718fc7ce4c06ce-1600x1600.png?w=3840&q=75&fit=clip&auto=format" }}
                />
            </View>
            <View>
                <Text>Texto de ejemplo</Text>
                <Text>Texto de ejemplo</Text>
                <View>
                    <Text>19.00</Text>
                    <FilertSelectButton/>
                </View>
            </View>
        </LinearGradient>
    );
}


// STYLES
const styles = StyleSheet.create({
    imgcont: {
        width: "100%",
        maxHeight: Platform.OS === "ios" ? "37%" : "37%",
        margin: "5%",
        aspectRatio: 1,
        borderRadius: 10,
        overflow: "hidden",
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.75,
                shadowRadius: 4.84,
            },
            android: {

            },
        }),
    },
    pimage: {
        width: "100%",
        height: "100%",
        resizeMode: 'contain',
        borderRadius: 10,
    },
    tdetails: {
        width: '85%',
        margin: '3%',
        color: "#FFFFF"
    },
    ttitledetails: {
        fontWeight: "bold",
        color: "#FFF",
        fontSize: 20,
        justifyContent: "center",
        textAlign: "left"
    },
    txtdetails: {
        color: "#FFFF",
        paddingTop: 10,
        fontSize: 14,
        textAlign: "justify"
    },
    pricesContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: '2%',
        width: '100%'
    },
    priceItem: {
        padding: '5%',
        margin: 4,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#fafafa",
        justifyContent: "center",
    },
    selectedPriceItem: {
        backgroundColor: "#e1b461f8",
        borderColor: '#e1b461f8',
        borderWidth: 3,
        shadowColor: "#e1b461f8",
        elevation: 5,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.35,
        shadowRadius: 10.84,
    },
    priceText: {
        color: "#ffffff",
        fontSize: 16,
    },
    priceTextSelected: {
        color: "#000",
        fontSize: 16,
    },
    ppbar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#000000",
        borderWidth: 1,
        borderRadius: 15,
    },
    priceTextBar: {
        padding: 30,
        paddingHorizontal: "8%",
        fontSize: 25,
        justifyContent: "flex-start",
        alignContent: "flex-end",
        textAlign: "center",
        color: "#f9f9f9",
        fontWeight: "bold",
    },
    offertcont: {
        flex: 1,
        width: "95%",
        borderRadius: 15,
        margin: 10,
        overflow: 'hidden',
    },
    obackimage: {
        borderRadius: 15,
        alignItems: "flex-star",
        justifyContent: "flex-end",
    },
    offertText: {
        minHeight: 200,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        padding: 10
    },
    ttitleoffert: {
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        textShadowColor: "#47352d",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    toffertdetails: {
        color: "#000000",
        fontSize: 16,
        textAlign: "center",
    },
    pproduct: {
        padding: 10,
        borderRadius: 15,
    },
    cimg: {
        maxWidth: 200,
        maxHeight: 200,
        borderRadius: 13,
        overflow: "hidden",
    },
    ppimage:{
        width: "100%",
        height: "100%",
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.75,
                shadowRadius: 4.84,
            },
        }),
        borderRadius: 13,
        overflow: "hidden",
    }
});


// EXPORTS
export { ProductImg, ProductAbout, AmountProductComponent, PriceBuyProductBar, ProductDetails, OffertProduct, FilterProduct };