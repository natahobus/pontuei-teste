import React from "react";
import { View, Text, StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  
  const ultimos = [
    { id: "1", nome: "Diadê", img: "https://via.placeholder.com/100" },
    { id: "2", nome: "Santa Barba", img: "https://via.placeholder.com/100" },
    { id: "3", nome: "Nicolini", img: "https://via.placeholder.com/100" },
  ];

  const servicos = [
    { id: "1", nome: "Cafeterias" },
    { id: "2", nome: "Mercados" },
    { id: "3", nome: "Barbearias" },
    { id: "4", nome: "Restaurantes" },
  ];

  const lojasProximas = [
    { id: "1", nome: "Café Bom Dia" },
    { id: "2", nome: "Barbearia Style" },
    { id: "3", nome: "Mercado Central" },
  ];

  const avisos = [
    { id: "1", titulo: "Promoção exclusiva 💥" },
    { id: "2", titulo: "Ganhe pontos em dobro ⭐" },
    { id: "3", titulo: "Novo parceiro cadastrado 🎉" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Logo e boas-vindas */}
      <Text style={styles.logo}>pontuei.</Text>
      <Text style={styles.welcome}>
        Bem vindo de volta, {"\n"}
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
          <Text style={styles.sectionTitle}>últimos estabelecimentos visitados</Text>
          <Text style={styles.verMais}>ver mais</Text>
        </View>
        <FlatList
          data={ultimos}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.img }} style={styles.cardImg} />
              <Text style={styles.cardText}>{item.nome}</Text>
            </View>
          )}
        />
      </View>

      {/* Carrossel de avisos rolável */}
      <View style={styles.section}>
        <FlatList
          data={avisos}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.carousel}>
              <Text style={styles.carouselText}>{item.titulo}</Text>
            </View>
          )}
        />
      </View>

      {/* Serviços */}
      <Text style={styles.sectionTitle}>Serviços</Text>
      <View style={styles.grid}>
        {servicos.map((s) => (
          <TouchableOpacity key={s.id} style={styles.gridItem}>
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
          <View style={styles.cardSmall}>
            <Text style={styles.cardText}>{item.nome}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#E94057", 
    marginBottom: 8,
    textAlign: "center",
  },
  welcome: {
    fontSize: 16,
    color: "#333",
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
    color: "#333",
  },
  verMais: {
    fontSize: 14,
    color: "#E94057",
  },
  card: {
    marginRight: 12,
    alignItems: "center",
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
    color: "#333",
  },
  carousel: {
    width: width - 60,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#f8d7da",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  carouselText: {
    color: "#E94057",
    fontSize: 14,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  gridItem: {
    width: "48%",
    height: 80,
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  gridText: {
    color: "#333",
    fontWeight: "500",
  },
  cardSmall: {
    width: 100,
    height: 80,
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
});
