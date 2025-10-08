import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import ContainerTela from "../../components/ContainerTela";
import theme from "../../theme";

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
    image: "https://via.placeholder.com/300x150/F8BBD0/000000?text=Nicolini+Super",
  },
];

export default function TelaExplorar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const filteredStores = stores.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ContainerTela>
      <ScrollView showsVerticalScrollIndicator={false}>
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

        <Text style={styles.sectionTitle}>Categorias</Text>
        <FlatList
          data={categories}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 8 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />

        <Text style={styles.sectionTitle}>Lojas recomendadas</Text>
        {filteredStores.map((store) => (
          <View key={store.id} style={[styles.storeCard, { overflow: "hidden" }]}>
            <Image source={{ uri: store.image }} style={styles.storeImage} />
            <View style={styles.storeContent}>
              <Text style={styles.storeName}>{store.name}</Text>
              <Text style={styles.storePoints}>{store.points} pontos</Text>
              <TouchableOpacity
                style={styles.storeButton}
                onPress={() => router.push(`/loja/${store.id}`)}
              >
                <Text style={styles.storeButtonText}>Ver loja</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </ContainerTela>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    marginLeft: 8,
    fontFamily: theme.fonts.regular,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    marginBottom: 12,
    marginTop: 8,
    color: theme.colors.text,
  },
  categoryItem: {
    backgroundColor: "#fce4ec",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 12,
  },
  categoryText: {
    fontSize: 14,
    color: theme.colors.primary,
    fontFamily: theme.fonts.semiBold,
  },
  storeCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  storeImage: {
    width: "100%",
    height: 152,
  },
  storeContent: {
    padding: 12,
  },
  storeName: {
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    marginBottom: 4,
    color: theme.colors.text,
  },
  storePoints: {
    fontSize: 14,
    color: "#777",
    marginBottom: 12,
    fontFamily: theme.fonts.regular,
  },
  storeButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  storeButtonText: {
    color: "#fff",
    fontFamily: theme.fonts.bold,
  },
});