import React from "react";
import {
  SafeAreaView,
  View,
  Text,
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
    <SafeAreaView className="flex-1 bg-white p-4">
      {/* Cabeçalho com ícone de usuário */}
      <View className="flex-row items-center mb-4 gap-3">
        <View className="w-11 h-11 rounded-full bg-pink-50 items-center justify-center">
          <Ionicons name="person-outline" size={28} color="#E94057" />
        </View>
        <View>
          <Text className="text-lg font-bold text-gray-800">{user.name}</Text>
          <Text className="text-xs text-gray-500 mt-1">Conta Pontuei</Text>
        </View>
      </View>

      {/* Cartão de pontos */}
      <View className="bg-white rounded-2xl border border-pink-200 p-4 mb-5 items-center">
        <Text className="text-3xl font-extrabold text-primary">{user.points}</Text>
        <Text className="text-gray-700 mb-2">pontos</Text>

        <View className="flex-row items-center gap-2 bg-primary py-1 px-3 rounded-full mb-3">
          <Ionicons name="star" size={14} color="#fff" />
          <Text className="text-white font-bold text-xs">Nível {user.tier}</Text>
        </View>

        {/* Barra de progresso */}
        <View className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mt-1">
          <View className="h-full bg-primary rounded-full" style={{ width: "60%" }} />
        </View>
        <Text className="mt-2 text-xs text-gray-500">
          Faltam <Text className="font-bold">400 pts</Text> para sua próxima recompensa
        </Text>
      </View>

      {/* Lista: Minha conta */}
      <Text className="text-sm font-bold text-text mt-2 mb-2">Minha conta</Text>
      <View className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-3">
        {conta.map((item, idx) => (
          <TouchableOpacity
            key={item.id}
            className={`py-4 px-4 flex-row justify-between items-center ${
              idx < conta.length - 1 ? "border-b border-gray-100" : ""
            }`}
            onPress={item.onPress}
          >
            <View className="flex-row items-center gap-3">
              <Ionicons name={item.icon as any} size={22} color="#E94057" />
              <Text className="text-base text-gray-800">{item.label}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#bbb" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Lista: Configurações */}
      <Text className="text-sm font-bold text-text mt-2 mb-2">Configurações</Text>
      <View className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-3">
        {ajustes.map((item, idx) => (
          <TouchableOpacity
            key={item.id}
            className={`py-4 px-4 flex-row justify-between items-center ${
              idx < ajustes.length - 1 ? "border-b border-gray-100" : ""
            }`}
            onPress={item.onPress}
          >
            <View className="flex-row items-center gap-3">
              <Ionicons name={item.icon as any} size={22} color="#E94057" />
              <Text className="text-base text-gray-800">{item.label}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#bbb" />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        className="self-center mt-4 p-2 px-3"
        onPress={() =>
          Alert.alert("Sair", "Você realmente deseja sair?", [
            { text: "Cancelar", style: "cancel" },
            { text: "Sair", style: "destructive", onPress: () => {} },
          ])
        }
      >
        <Text className="text-primary font-bold">Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


