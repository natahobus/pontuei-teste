// app/_layout.tsx
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import { CartProvider } from "../context/CartContext";

function HeaderRightCart() {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.push("/cart")}
      style={{ marginRight: 16 }}
    >
      <Ionicons name="cart-outline" size={24} color="#333" />
    </Pressable>
  );
}

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack>
        {/* Tabs principais */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Loja com botão de voltar e carrinho */}
        <Stack.Screen
          name="store/[id]"
          options={{
            title: "Loja",
            headerRight: () => <HeaderRightCart />,
          }}
        />

        {/* Carrinho fora das tabs */}
        <Stack.Screen
          name="cart"
          options={{
            title: "Carrinho",
          }}
        />
      </Stack>
    </CartProvider>
  );
}
