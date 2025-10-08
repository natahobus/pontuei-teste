import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { stores } from "../../data/stores";
import CartaoProduto from "../../components/CartaoProduto";
import ContainerTela from "../../components/ContainerTela";
import theme from "../../theme";

export default function TelaLoja() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const loja = stores.find((s) => s.id === id);

  if (!loja) {
    return (
      <ContainerTela>
        <Text style={styles.notFound}>Loja não encontrada</Text>
      </ContainerTela>
    );
  }

  return (
    <ContainerTela>
      <Text style={styles.storeName}>{loja.name}</Text>
      <Text style={styles.storeCategory}>{loja.category}</Text>

      <FlatList
        data={loja.products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartaoProduto product={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </ContainerTela>
  );
}

const styles = StyleSheet.create({
  notFound: {
    fontSize: 16,
    color: theme.colors.text,
    fontFamily: theme.fonts.regular,
  },
  storeName: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    marginBottom: 8,
    color: theme.colors.text,
  },
  storeCategory: {
    fontSize: 16,
    color: "#777",
    marginBottom: 16,
    fontFamily: theme.fonts.regular,
  },
});