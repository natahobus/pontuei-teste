// components/CartIcon.tsx
import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../context/CartContext";

type Props = {
  color?: string;
  size?: number;
};

export default function CartIcon({ color = "#000", size = 24 }: Props) {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <View className="pr-3">
      <Ionicons name="cart-outline" size={size} color={color} />
      {totalItems > 0 && (
        <View className="absolute -top-1 right-1 bg-primary rounded-full min-w-[18px] h-[18px] justify-center items-center px-1">
          <Text className="text-white text-xs font-bold">
            {totalItems}
          </Text>
        </View>
      )}
    </View>
  );
}
