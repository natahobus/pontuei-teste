import React from "react";
import { Text, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { stores } from "../../data/stores";
import ProductCard from "../../components/ProductCard";
import ScreenContainer from "../../components/ScreenContainer";

export default function StoreScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const loja = stores.find((s) => s.id === id);

  if (!loja) {
    return (
      <ScreenContainer>
        <Text className="text-base text-text">Loja não encontrada</Text>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <Text className="text-xl font-bold mb-2">{loja.name}</Text>
      <Text className="text-base text-gray-500 mb-4">{loja.category}</Text>

      <FlatList
        data={loja.products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </ScreenContainer>
  );
}
