// app/store/[id].tsx
import { useLocalSearchParams } from "expo-router";
import { Text, FlatList, StyleSheet } from "react-native";
import { stores } from "../../data/stores";
import ProductCard from "../../components/ProductCard";
import ScreenContainer from "../../components/ScreenContainer";

export default function StoreDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const store = stores.find((s) => s.id === id);

  if (!store) return <Text>Loja não encontrada</Text>;

  return (
    <ScreenContainer>
      <Text style={styles.title}>{store.name}</Text>
      <Text style={styles.category}>{store.category}</Text>
      <FlatList
        data={store.products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 4 },
  category: { fontSize: 16, color: "gray", marginBottom: 12 },
});
