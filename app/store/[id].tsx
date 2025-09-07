import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
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
        <Text>Loja não encontrada</Text>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <Text style={styles.title}>{loja.name}</Text>
      <Text style={styles.category}>{loja.category}</Text>

      <FlatList
        data={loja.products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
  category: { fontSize: 16, color: "gray", marginBottom: 16 },
});
