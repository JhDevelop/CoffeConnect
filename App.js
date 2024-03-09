import * as React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeView from "./src/view/HomeView";
import ProductView from "./src/view/ProductView";
import ProductMapView from "./src/view/ProductMapView";
import { HeaderComponent } from "./src/components/HeaderComponents";
import BagView from "./src/view/BagView";

const Stack = createNativeStackNavigator();

function App() {
  const [title, setTitle] = React.useState("Header");

  return (
    <NavigationContainer>
      <HeaderComponent name={title} />
      <AppNavigation setTitle={setTitle}/>
    </NavigationContainer>
  );
  
}

function AppNavigation({ setTitle }) {
  const navigation = useNavigation();


  React.useEffect(() => {
    const unsubscribe = navigation.addListener("state", () => {
      const currentScreen = navigation.getCurrentRoute().name;
      setTitle(currentScreen);
    });

    return unsubscribe;
  }, [navigation, setTitle]);

  return (
    <Stack.Navigator initialRouteName="HomeView">
      <Stack.Screen name="HomeView" component={HomeView} options={{ headerShown: false }} />
      <Stack.Screen name="ProductView" component={ProductView} options={{ headerShown: false }} />
      <Stack.Screen name="ProductMapView" component={ProductMapView} options={{ headerShown: false }} />
      <Stack.Screen name="BagView" component={BagView} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default App;
