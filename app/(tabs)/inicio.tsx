// app/(tabs)/inicio.tsx
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
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import ContainerTela from "../../components/ContainerTela";
import Cartao from "../../components/Cartao";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme";

const { width } = Dimensions.get("window");

const TelaInicio = () => {
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
    <ContainerTela>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.logo}>pontuei.</Text>
        <Text style={styles.welcome}>
          Bem-vindo de volta,{"\n"}
          <Text style={styles.userName}>Natã Kuhn!</Text>
        </Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Pesquise por lojas, cafeterias e mais"
          placeholderTextColor="#999"
        />

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Últimos estabelecimentos</Text>
            <Text style={styles.seeMore}>ver mais</Text>
          </View>
          <FlatList
            data={ultimos}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => router.push(`/loja/${item.id}`)}>
                <Cartao style={[styles.lastVisited, { marginRight: 12 }]}>
                  <Image source={{ uri: item.img }} style={styles.lastVisitedImg} />
                  <Text style={styles.lastVisitedText}>{item.nome}</Text>
                </Cartao>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={styles.section}>
          <FlatList
            data={avisos}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Cartao style={[styles.announcement, { backgroundColor: item.cor, marginRight: 12 }]}>
                <Text style={styles.announcementText}>{item.titulo}</Text>
              </Cartao>
            )}
          />
        </View>

        <Text style={styles.sectionTitle}>Serviços</Text>
        <View style={styles.servicesGrid}>
          {servicos.map((s) => (
            <TouchableOpacity key={s.id} style={styles.serviceItem}>
              <Ionicons name={s.icon as any} size={24} color={theme.colors.primary} />
              <Text style={styles.serviceText}>{s.nome}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Lojas próximas de você</Text>
        <FlatList
          data={lojasProximas}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => router.push(`/loja/${item.id}`)}>
              <Cartao style={[styles.nearbyStore, { marginRight: 12 }]}>
                <Image source={{ uri: item.img }} style={styles.nearbyStoreImg} />
                <Text style={styles.nearbyStoreText}>{item.nome}</Text>
              </Cartao>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </ContainerTela>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
    marginBottom: 8,
    textAlign: "center",
  },
  welcome: {
    fontSize: 16,
    color: theme.colors.text,
    marginBottom: 20,
    fontFamily: theme.fonts.regular,
  },
  userName: {
    fontFamily: theme.fonts.bold,
  },
  searchInput: {
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 12,
    marginBottom: 24,
    fontFamily: theme.fonts.regular,
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
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.text,
    marginBottom: 12,
  },
  seeMore: {
    fontSize: 14,
    color: theme.colors.primary,
    fontFamily: theme.fonts.regular,
  },
  lastVisited: {
    alignItems: "center",
    padding: 8,
    width: 100,
  },
  lastVisitedImg: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: "#f0f0f0",
  },
  lastVisitedText: {
    fontSize: 12,
    color: theme.colors.text,
    textAlign: "center",
    fontFamily: theme.fonts.regular,
  },
  announcement: {
    justifyContent: "center",
    alignItems: "center",
    width: width - 60,
    height: 120,
  },
  announcementText: {
    fontSize: 16,
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.text,
    textAlign: "center",
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  serviceItem: {
    width: "48%",
    height: 100,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  serviceText: {
    color: theme.colors.text,
    fontFamily: theme.fonts.medium,
    marginTop: 8,
  },
  nearbyStore: {
    width: 160,
    height: 140,
    alignItems: "center",
    padding: 8,
  },
  nearbyStoreImg: {
    width: "100%",
    height: 96,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: "#f0f0f0",
  },
  nearbyStoreText: {
    fontSize: 12,
    color: theme.colors.text,
    textAlign: "center",
    fontFamily: theme.fonts.regular,
  },
});

export default TelaInicio;