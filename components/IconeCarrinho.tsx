// components/IconeCarrinho.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../context/CartContext";
import theme from "../theme";

type Props = {
  color?: string;
  size?: number;
};

export default function IconeCarrinho({ color = "#000", size = 24 }: Props) {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <View style={styles.container}>
      <Ionicons name="cart-outline" size={size} color={color} />
      {totalItems > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {totalItems}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 12,
  },
  badge: {
    position: "absolute",
    top: -4,
    right: 4,
    backgroundColor: theme.colors.primary,
    borderRadius: 9,
    minWidth: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: theme.fonts.bold,
  },
});