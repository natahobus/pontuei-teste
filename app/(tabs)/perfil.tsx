import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ContainerTela from "../../components/ContainerTela";
import theme from "../../theme";

export default function TelaPerfil() {
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
    <ContainerTela>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person-outline" size={28} color={theme.colors.primary} />
        </View>
        <View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userSubtitle}>Conta Pontuei</Text>
        </View>
      </View>

      <View style={styles.pointsCard}>
        <Text style={styles.pointsValue}>{user.points}</Text>
        <Text style={styles.pointsLabel}>pontos</Text>

        <View style={styles.tierBadge}>
          <Ionicons name="star" size={14} color="#fff" />
          <Text style={styles.tierText}>Nível {user.tier}</Text>
        </View>

        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: "60%" }]} />
        </View>
        <Text style={styles.progressText}>
          Faltam <Text style={styles.progressBold}>400 pts</Text> para sua próxima recompensa
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Minha conta</Text>
      <View style={styles.menuContainer}>
        {conta.map((item, idx) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.menuItem, idx < conta.length - 1 && styles.menuItemBorder]}
            onPress={item.onPress}
          >
            <View style={styles.menuItemLeft}>
              <Ionicons name={item.icon as any} size={22} color={theme.colors.primary} />
              <Text style={styles.menuItemText}>{item.label}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#bbb" />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Configurações</Text>
      <View style={styles.menuContainer}>
        {ajustes.map((item, idx) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.menuItem, idx < ajustes.length - 1 && styles.menuItemBorder]}
            onPress={item.onPress}
          >
            <View style={styles.menuItemLeft}>
              <Ionicons name={item.icon as any} size={22} color={theme.colors.primary} />
              <Text style={styles.menuItemText}>{item.label}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#bbb" />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() =>
          Alert.alert("Sair", "Você realmente deseja sair?", [
            { text: "Cancelar", style: "cancel" },
            { text: "Sair", style: "destructive", onPress: () => {} },
          ])
        }
      >
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </ContainerTela>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fce4ec",
    alignItems: "center",
    justifyContent: "center",
  },
  userName: {
    fontSize: 18,
    fontFamily: theme.fonts.bold,
    color: "#333",
  },
  userSubtitle: {
    fontSize: 12,
    color: "#777",
    marginTop: 4,
    fontFamily: theme.fonts.regular,
  },
  pointsCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#f8bbd0",
    padding: 16,
    marginBottom: 20,
    alignItems: "center",
  },
  pointsValue: {
    fontSize: 30,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
  },
  pointsLabel: {
    color: "#333",
    marginBottom: 8,
    fontFamily: theme.fonts.regular,
  },
  tierBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: theme.colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 12,
  },
  tierText: {
    color: "#fff",
    fontFamily: theme.fonts.bold,
    fontSize: 12,
  },
  progressBar: {
    width: "100%",
    height: 8,
    backgroundColor: "#f5f5f5",
    borderRadius: 4,
    overflow: "hidden",
    marginTop: 4,
  },
  progressFill: {
    height: "100%",
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  progressText: {
    marginTop: 8,
    fontSize: 12,
    color: "#777",
    fontFamily: theme.fonts.regular,
  },
  progressBold: {
    fontFamily: theme.fonts.bold,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: theme.fonts.bold,
    color: theme.colors.text,
    marginTop: 8,
    marginBottom: 8,
  },
  menuContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    overflow: "hidden",
    marginBottom: 12,
  },
  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  menuItemText: {
    fontSize: 16,
    color: "#333",
    fontFamily: theme.fonts.regular,
  },
  logoutButton: {
    alignSelf: "center",
    marginTop: 16,
    padding: 8,
    paddingHorizontal: 12,
  },
  logoutText: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.bold,
  },
});