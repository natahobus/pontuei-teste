// components/ProductCard.tsx
import React from "react";
import { View, Text } from "react-native";
import { Product } from "../data/stores";
import { useCart } from "../context/CartContext";
import Card from "./Card";
import PrimaryButton from "./PrimaryButton";

type Props = {
  product: Product;
};

const money = (v: number) => `R$ ${v.toFixed(2).replace(".", ",")}`;

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <Card className="p-3 mb-3">
      <View className="flex-row items-center">
        <View className="flex-1 pr-3">
          <Text className="text-base font-bold text-text">{product.name}</Text>
          <Text className="text-sm font-regular text-gray-600 mt-1">
            {money(product.price)} • {product.points} pontos
          </Text>
        </View>
        <View className="w-30">
          <PrimaryButton title="Adicionar" onPress={() => addToCart(product)} />
        </View>
      </View>
    </Card>
  );
}
