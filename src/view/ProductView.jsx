import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { ProductAbout, ProductDetails, ProductImg, AmountProductComponent, PriceBuyProductBar } from "../components/ProductComponents";
import { CustomButton, SellButton } from "../components/ButtonsComponents";
import { HeaderComponent } from "../components/HeaderComponents";

const prices = [
    { price: "19.00", coin: "$", amount: "1", unit: "Kg" },
    { price: "25.00", coin: "$", amount: "1.5", unit: "Kg" },
    { price: "32.00", coin: "$", amount: "2", unit: "Kg" },
];

const producto = {
    brand: "Del Abuelo",
    name: "Coffe-Lake",
}

const stars = 3.2;

export default function ProductView() {
    const [price, setPrice] = useState(prices[0].price);
    const [coin, setCoin] = useState(prices[0].coin);
    const handleAmountChange = (newPrice) => {
        setPrice(newPrice);
    };
    const handleCoinChange = (newCoin) => {
        setCoin(newCoin);
    };

    return (
        <>
            <View style={styles.container}>
                <ProductImg />
                <View style={styles.details}>
                    <ProductDetails product={producto} />
                    <ScrollView>
                        <AmountProductComponent prices={prices} handleAmountSelect={handleAmountChange} handleCoinSelect={handleCoinChange} />
                        <ProductAbout />
                    </ScrollView>
                    <PriceBuyProductBar price={price} coin={coin} />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '18%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#be8360'
    },
    details: {
        flex: 1,
        color: '#FFFFF',
        backgroundColor: "#000000f0",
        width: '100%'
    }
});