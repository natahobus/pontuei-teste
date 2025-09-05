// app/store/[id].tsx
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { stores, type Product } from "../../data/stores";
import { useCart } from "../../context/CartContext";

const money = (v: number) => `R$ ${v.toFixed(2).replace(".", ",")}`;

export default function StoreDetails() {
  const params = useLocalSearchParams<{ id?: string | string[] }>();
  const router = useRouter();
  const { addToCart } = useCart();
  const [message, setMessage] = useState("");

  const storeId = Array.isArray(params.id) ? params.id[0] : params.id ?? "";
  const store = stores.find((s) => s.id === storeId);

  if (!store) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#e91e63" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Loja</Text>
        </View>
        <View style={styles.center}>
          <Text>Loja não encontrada.</Text>
        </View>
      </SafeAreaView>
    );
  }

  const handleAddToCart = (item: Product) => {
    addToCart(item);
    setMessage(`${item.name} adicionado ao carrinho!`);
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#e91e63" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{store.name}</Text>
      </View>

      {message ? (
        <View style={styles.toast}>
          <Text style={styles.toastText}>{message}</Text>
        </View>
      ) : null}

      <FlatList
        data={store.products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <View>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.meta}>
                {money(item.price)} • {item.points} pontos
              </Text>
            </View>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => handleAddToCart(item)}
            >
              <Text style={styles.addButtonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f8bbd0",
    backgroundColor: "#fff",
    gap: 10,
  },
  headerTitle: { fontSize: 18, fontWeight: "700", color: "#e91e63" },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },

  productCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#f8bbd0",
    borderRadius: 10,
    padding: 16,
  },
  productName: { fontSize: 16, fontWeight: "600", color: "#222" },
  meta: { fontSize: 13, color: "#ec407a", marginTop: 4 },
  addButton: {
    backgroundColor: "#ec407a",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  addButtonText: { color: "#fff", fontWeight: "bold" },

  toast: {
    position: "absolute",
    top: 70,
    alignSelf: "center",
    backgroundColor: "#ec407a",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    zIndex: 99,
  },
  toastText: { color: "#fff", fontWeight: "600" },
});
