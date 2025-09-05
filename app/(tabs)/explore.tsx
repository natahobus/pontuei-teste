
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const PINK = "#E94057";

const categories = [
  { id: "1", name: "Cafeterias" },
  { id: "2", name: "Mercados" },
  { id: "3", name: "Barbearias" },
  { id: "4", name: "Restaurantes" },
];

const stores = [
  {
    id: "1",
    name: "Diadê Café",
    points: 120,
    image: "https://via.placeholder.com/300x150/FFB6C1/000000?text=DiaD+Café",
  },
  {
    id: "2",
    name: "Santa Barba",
    points: 85,
    image: "https://via.placeholder.com/300x150/FFC0CB/000000?text=Santa+Barba",
  },
  {
    id: "3",
    name: "Nicolini Supermercado",
    points: 200,
    image:
      "https://via.placeholder.com/300x150/F8BBD0/000000?text=Nicolini+Super",
  },
];

export default function ExploreScreen() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const filteredStores = stores.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Campo de busca */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar lojas, serviços..."
            placeholderTextColor="#999"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* Categorias */}
        <Text style={styles.sectionTitle}>Categorias</Text>
        <FlatList
          data={categories}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 8 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryCard}>
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />

        {/* Lojas recomendadas */}
        <Text style={styles.sectionTitle}>Lojas recomendadas</Text>
        {filteredStores.map((store) => (
          <View key={store.id} style={styles.storeCard}>
            <Image source={{ uri: store.image }} style={styles.storeImage} />
            <View style={styles.storeInfo}>
              <Text style={styles.storeName}>{store.name}</Text>
              <Text style={styles.storePoints}>{store.points} pontos</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push(`/store/${store.id}`)}
              >
                <Text style={styles.buttonText}>Ver loja</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
    marginTop: 8,
    color: "#333",
  },
  categoryCard: {
    backgroundColor: "#f8d7da",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 14,
    color: PINK,
    fontWeight: "600",
  },
  storeCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  storeImage: {
    width: "100%",
    height: 150,
  },
  storeInfo: {
    padding: 12,
  },
  storeName: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
    color: "#333",
  },
  storePoints: {
    fontSize: 14,
    color: "#888",
    marginBottom: 10,
  },
  button: {
    backgroundColor: PINK,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
});
