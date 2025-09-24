
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

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
    <SafeAreaView className="flex-1 bg-white p-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Campo de busca */}
        <View className="flex-row items-center bg-gray-100 rounded-xl px-3 mb-5">
          <Ionicons name="search-outline" size={20} color="#999" />
          <TextInput
            className="flex-1 py-3 ml-2"
            placeholder="Buscar lojas, serviços..."
            placeholderTextColor="#999"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* Categorias */}
        <Text className="text-base font-bold mb-3 mt-2 text-text">Categorias</Text>
        <FlatList
          data={categories}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 8 }}
          renderItem={({ item }) => (
            <TouchableOpacity className="bg-pink-100 py-3 px-4 rounded-full mr-3">
              <Text className="text-sm text-primary font-semibold">{item.name}</Text>
            </TouchableOpacity>
          )}
        />

        {/* Lojas recomendadas */}
        <Text className="text-base font-bold mb-3 mt-2 text-text">Lojas recomendadas</Text>
        {filteredStores.map((store) => (
          <View key={store.id} className="bg-white rounded-2xl mb-5 overflow-hidden shadow-sm">
            <Image source={{ uri: store.image }} className="w-full h-38" />
            <View className="p-3">
              <Text className="text-base font-bold mb-1 text-text">{store.name}</Text>
              <Text className="text-sm text-gray-500 mb-3">{store.points} pontos</Text>
              <TouchableOpacity
                className="bg-primary py-3 rounded-xl items-center"
                onPress={() => router.push(`/store/${store.id}`)}
              >
                <Text className="text-white font-bold">Ver loja</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}


