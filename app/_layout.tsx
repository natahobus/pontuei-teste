// app/_layout.tsx
import { Stack } from "expo-router";
import { CartProvider } from "../context/CartContext";
import { useFonts } from "expo-font";
import { Text } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  }

  return (
    <CartProvider>
      <Stack>
        {/* Tabs principais */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Loja com botão de voltar */}
        <Stack.Screen name="store/[id]" options={{ title: "Loja" }} />

        {/* Carrinho */}
        <Stack.Screen name="cart" options={{ title: "Carrinho" }} />
      </Stack>
    </CartProvider>
  );
}
