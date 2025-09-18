// app/_layout.tsx  
import { Stack, Link } from "expo-router";
import { Pressable } from "react-native";
import { CartProvider } from "../context/CartContext";
import CartIcon from "../components/CartIcon";

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen
          name="store/[id]"
          options={{
            title: "Loja",
            headerRight: () => (
              <Link href="/cart" asChild>
                <Pressable style={{ marginRight: 12 }}>
                  <CartIcon color="#000" size={24} />
                </Pressable>
              </Link>
            ),
          }}
        />

        <Stack.Screen name="cart" options={{ title: "Carrinho" }} />
      </Stack>
    </CartProvider>
  );
}         
          
