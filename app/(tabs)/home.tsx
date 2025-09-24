// app/(tabs)/home.tsx home app
import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import ScreenContainer from "../../components/ScreenContainer";
import Card from "../../components/Card";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const router = useRouter();

  const ultimos = [
    { id: "1", nome: "Diadê", img: "https://via.placeholder.com/100" },
    { id: "2", nome: "Santa Barba", img: "https://via.placeholder.com/100" },
    { id: "3", nome: "Nicolini", img: "https://via.placeholder.com/100" },
  ];

  const servicos = [
    { id: "1", nome: "Cafeterias", icon: "cafe-outline" },
    { id: "2", nome: "Mercados", icon: "cart-outline" },
    { id: "3", nome: "Barbearias", icon: "cut-outline" },
    { id: "4", nome: "Restaurantes", icon: "restaurant-outline" },
  ];

  const lojasProximas = [
    { id: "1", nome: "Café Bom Dia", img: "https://via.placeholder.com/200" },
    { id: "2", nome: "Barbearia Style", img: "https://via.placeholder.com/200" },
    { id: "3", nome: "Mercado Central", img: "https://via.placeholder.com/200" },
  ];

  const avisos = [
    { id: "1", titulo: "Promoção exclusiva 💥", cor: "#fde2e4" },
    { id: "2", titulo: "Ganhe pontos em dobro ⭐", cor: "#fff3b0" },
    { id: "3", titulo: "Novo parceiro cadastrado 🎉", cor: "#d0f4de" },
  ];

  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Logo e boas-vindas */}
        <Text className="text-xl font-bold text-primary mb-2 text-center">pontuei.</Text>
        <Text className="text-base text-text mb-5">
          Bem-vindo de volta,{"\n"}
          <Text className="font-bold">Natã Kuhn!</Text>
        </Text>

        {/* Barra de busca */}
        <TextInput
          className="bg-gray-100 p-3 rounded-xl mb-6"
          placeholder="Pesquise por lojas, cafeterias e mais"
          placeholderTextColor="#999"
        />

        {/* Últimos visitados */}
        <View className="mb-6">
          <View className="flex-row justify-between mb-3">
            <Text className="text-base font-semibold text-text">Últimos estabelecimentos</Text>
            <Text className="text-sm text-primary">ver mais</Text>
          </View>
          <FlatList
            data={ultimos}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => router.push(`/store/${item.id}`)}>
                <Card className="mr-3 items-center p-2 w-25">
                  <Image source={{ uri: item.img }} className="w-20 h-20 rounded-xl mb-2 bg-gray-200" />
                  <Text className="text-xs text-text text-center">{item.nome}</Text>
                </Card>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Carrossel de avisos */}
        <View className="mb-6">
          <FlatList
            data={avisos}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card className="justify-center items-center mr-3" style={{ width: width - 60, height: 120, backgroundColor: item.cor }}>
                <Text className="text-base font-semibold text-text text-center">{item.titulo}</Text>
              </Card>
            )}
          />
        </View>

        {/* Serviços */}
        <Text className="text-base font-semibold text-text">Serviços</Text>
        <View className="flex-row flex-wrap justify-between mb-6">
          {servicos.map((s) => (
            <TouchableOpacity key={s.id} className="w-[48%] h-25 bg-gray-50 rounded-xl justify-center items-center mb-3">
              <Ionicons name={s.icon as any} size={24} color="#E94057" />
              <Text className="text-text font-medium mt-2">{s.nome}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Lojas próximas */}
        <Text className="text-base font-semibold text-text">Lojas próximas de você</Text>
        <FlatList
          data={lojasProximas}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => router.push(`/store/${item.id}`)}>
              <Card className="w-40 h-35 mr-3 items-center p-2">
                <Image source={{ uri: item.img }} className="w-full h-24 rounded-xl mb-2 bg-gray-200" />
                <Text className="text-xs text-text text-center">{item.nome}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

export default HomeScreen;


