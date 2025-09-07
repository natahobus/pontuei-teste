// app/_layout.tsx
import { Stack } from "expo-router";
import { CartProvider } from "../context/CartContext";

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack>
        {/* Tabs principais */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Loja com botão de voltar */}
        <Stack.Screen name="store/[id]" options={{ title: "Loja" }} />

        {/* Carrinho fora das tabs */}
        <Stack.Screen name="cart" options={{ title: "Carrinho" }} />
      </Stack>
    </CartProvider>
  );
}
