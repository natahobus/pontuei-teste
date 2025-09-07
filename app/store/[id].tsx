// app/store/[id].tsx
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, Stack, router } from "expo-router";
import { stores } from "../../data/stores";
import ProductCard from "../../components/ProductCard";
import CartIcon from "../../components/CartIcon";

export default function StoreDetail() {
  const { id } = useLocalSearchParams();
  const store = stores.find((s) => s.id === id);

  if (!store) return <Text>Loja não encontrada</Text>;

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: store.name,
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 12 }}
              onPress={() => router.push("/(tabs)/cart")}
            >
              <CartIcon color="black" size={24} />
            </TouchableOpacity>
          ),
        }}
      />

      <Text style={styles.category}>{store.category}</Text>
      <FlatList
        data={store.products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  category: { fontSize: 16, color: "gray", marginBottom: 12 },
});
