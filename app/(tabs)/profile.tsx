import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  const user = { name: "Natã Kuhn", points: 1200, tier: "Ouro" };

  const conta = [
    { id: "coupons", icon: "gift-outline", label: "Meus cupons", onPress: () => {} },
    { id: "favorites", icon: "heart-outline", label: "Favoritos", onPress: () => {} },
  ];

  const ajustes = [
    { id: "notifications", icon: "notifications-outline", label: "Notificações", onPress: () => {} },
    { id: "privacy", icon: "shield-checkmark-outline", label: "Privacidade", onPress: () => {} },
    { id: "support", icon: "chatbubbles-outline", label: "Ajuda & suporte", onPress: () => {} },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho com ícone de usuário */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person-outline" size={28} color="#E94057" />
        </View>
        <View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.subtitle}>Conta Pontuei</Text>
        </View>
      </View>

      {/* Cartão de pontos */}
      <View style={styles.pointsCard}>
        <Text style={styles.pointsValue}>{user.points}</Text>
        <Text style={styles.pointsLabel}>pontos</Text>

        <View style={styles.tierPill}>
          <Ionicons name="star" size={14} color="#fff" />
          <Text style={styles.tierText}>Nível {user.tier}</Text>
        </View>

        {/* Barra de progresso (exemplo) */}
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: "60%" }]} />
        </View>
        <Text style={styles.progressHint}>
          Faltam <Text style={{ fontWeight: "700" }}>400 pts</Text> para sua próxima recompensa
        </Text>
      </View>

      {/* Lista: Minha conta */}
      <Text style={styles.sectionTitle}>Minha conta</Text>
      <View style={styles.listCard}>
        {conta.map((item, idx) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.listItem, idx < conta.length - 1 && styles.divider]}
            onPress={item.onPress}
          >
            <View style={styles.listLeft}>
              <Ionicons name={item.icon as any} size={22} color="#E94057" />
              <Text style={styles.listLabel}>{item.label}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#bbb" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Lista: Configurações */}
      <Text style={styles.sectionTitle}>Configurações</Text>
      <View style={styles.listCard}>
        {ajustes.map((item, idx) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.listItem, idx < ajustes.length - 1 && styles.divider]}
            onPress={item.onPress}
          >
            <View style={styles.listLeft}>
              <Ionicons name={item.icon as any} size={22} color="#E94057" />
              <Text style={styles.listLabel}>{item.label}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#bbb" />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() =>
          Alert.alert("Sair", "Você realmente deseja sair?", [
            { text: "Cancelar", style: "cancel" },
            { text: "Sair", style: "destructive", onPress: () => {} },
          ])
        }
      >
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const PINK = "#E94057";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 16, gap: 12 },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fde7ed",
    alignItems: "center",
    justifyContent: "center",
  },
  name: { fontSize: 18, fontWeight: "700", color: "#222" },
  subtitle: { fontSize: 12, color: "#777", marginTop: 2 },

  pointsCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#f8bbd0",
    padding: 16,
    marginBottom: 18,
    alignItems: "center",
  },
  pointsValue: { fontSize: 28, fontWeight: "800", color: PINK, letterSpacing: 0.5 },
  pointsLabel: { color: "#444", marginBottom: 8 },
  tierPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: PINK,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 999,
    marginBottom: 12,
  },
  tierText: { color: "#fff", fontWeight: "700", fontSize: 12 },
  progressTrack: {
    width: "100%",
    height: 6,
    backgroundColor: "#f1f1f1",
    borderRadius: 999,
    overflow: "hidden",
    marginTop: 2,
  },
  progressFill: { height: "100%", backgroundColor: PINK, borderRadius: 999 },
  progressHint: { marginTop: 8, fontSize: 12, color: "#777" },

  sectionTitle: { fontSize: 14, fontWeight: "700", color: "#333", marginTop: 8, marginBottom: 8 },
  listCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#eee",
    overflow: "hidden",
    marginBottom: 12,
  },
  listItem: {
    paddingVertical: 14,
    paddingHorizontal: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  divider: { borderBottomWidth: 1, borderBottomColor: "#f3f3f3" },
  listLeft: { flexDirection: "row", alignItems: "center", gap: 10 },
  listLabel: { fontSize: 15, color: "#222" },

  logoutBtn: { alignSelf: "center", marginTop: 14, padding: 8, paddingHorizontal: 12 },
  logoutText: { color: PINK, fontWeight: "700" },
});
