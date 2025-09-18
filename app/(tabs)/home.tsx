// app/(tabs)/home.tsx home app
import React from "react";
import {
  View,
  Text,
  StyleSheet,
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
import theme from "../../theme";
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
        <Text style={styles.logo}>pontuei.</Text>
        <Text style={styles.welcome}>
          Bem-vindo de volta,{"\n"}
          <Text style={styles.username}>Natã Kuhn!</Text>
        </Text>

        {/* Barra de busca */}
        <TextInput
          style={styles.search}
          placeholder="Pesquise por lojas, cafeterias e mais"
          placeholderTextColor="#999"
        />

        {/* Últimos visitados */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Últimos estabelecimentos</Text>
            <Text style={styles.verMais}>ver mais</Text>
          </View>
          <FlatList
            data={ultimos}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => router.push(`/store/${item.id}`)}>
                <Card style={styles.card}>
                  <Image source={{ uri: item.img }} style={styles.cardImg} />
                  <Text style={styles.cardText}>{item.nome}</Text>
                </Card>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Carrossel de avisos */}
        <View style={styles.section}>
          <FlatList
            data={avisos}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card style={[styles.carousel, { backgroundColor: item.cor }]}>
                <Text style={styles.carouselText}>{item.titulo}</Text>
              </Card>
            )}
          />
        </View>

        {/* Serviços */}
        <Text style={styles.sectionTitle}>Serviços</Text>
        <View style={styles.grid}>
          {servicos.map((s) => (
            <TouchableOpacity key={s.id} style={styles.gridItem}>
              <Ionicons name={s.icon as any} size={24} color={theme.colors.primary} />
              <Text style={styles.gridText}>{s.nome}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Lojas próximas */}
        <Text style={styles.sectionTitle}>Lojas próximas de você</Text>
        <FlatList
          data={lojasProximas}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => router.push(`/store/${item.id}`)}>
              <Card style={styles.cardLarge}>
                <Image source={{ uri: item.img }} style={styles.cardLargeImg} />
                <Text style={styles.cardText}>{item.nome}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginBottom: 8,
    textAlign: "center",
  },
  welcome: {
    fontSize: 16,
    color: theme.colors.text,
    marginBottom: 20,
  },
  username: {
    fontWeight: "bold",
  },
  search: {
    backgroundColor: "#f2f2f2",
    padding: 12,
    borderRadius: 12,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: theme.colors.text,
  },
  verMais: {
    fontSize: 14,
    color: theme.colors.primary,
  },
  card: {
    marginRight: 12,
    alignItems: "center",
    padding: 8,
    width: 100,
  },
  cardImg: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginBottom: 6,
    backgroundColor: "#eee",
  },
  cardText: {
    fontSize: 12,
    color: theme.colors.text,
    textAlign: "center",
  },
  carousel: {
    width: width - 60,
    height: 120,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  carouselText: {
    fontSize: 16,
    fontWeight: "600",
    color: theme.colors.text,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  gridItem: {
    width: "48%",
    height: 100,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  gridText: {
    color: theme.colors.text,
    fontWeight: "500",
    marginTop: 6,
  },
  cardLarge: {
    width: 160,
    height: 140,
    marginRight: 12,
    alignItems: "center",
    padding: 8,
  },
  cardLargeImg: {
    width: "100%",
    height: 90,
    borderRadius: 12,
    marginBottom: 6,
    backgroundColor: "#eee",
  },
});
