// components/CartIcon.tsx
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../context/CartContext";
import { router } from "expo-router";
import { TouchableOpacity, View, Text } from "react-native";

export default function CartIcon({ color, size }: { color: string; size: number }) {
  const { cart } = useCart();

  return (
    <TouchableOpacity onPress={() => router.push("/cart")}>
      <View>
        <Ionicons
          name={cart.length > 0 ? "cart" : "cart-outline"}
          size={size}
          color={color}
        />
        {cart.length > 0 && (
          <View
            style={{
              position: "absolute",
              right: -6,
              top: -3,
              backgroundColor: "red",
              borderRadius: 8,
              paddingHorizontal: 4,
            }}
          >
            <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>
              {cart.length}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}
