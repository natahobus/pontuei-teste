// app/_layout.tsx  
import { Stack, Link } from "expo-router";
import { Pressable } from "react-native";
import { CartProvider } from "../context/CartContext";
import IconeCarrinho from "../components/IconeCarrinho";

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen
          name="loja/[id]"
          options={{
            title: "Loja",
            headerRight: () => (
              <Link href="/cart" asChild>
                <Pressable style={{ marginRight: 12 }}>
                  <IconeCarrinho color="#000" size={24} />
                </Pressable>
              </Link>
            ),
          }}
        />

        <Stack.Screen name="carrinho" options={{ title: "Carrinho" }} />
      </Stack>
    </CartProvider>
  );
}         
          
