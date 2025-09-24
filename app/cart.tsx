// app/cart.tsx
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { useCart } from "../context/CartContext";
import ScreenContainer from "../components/ScreenContainer";
import PrimaryButton from "../components/PrimaryButton";

const money = (v: number) => `R$ ${v.toFixed(2).replace(".", ",")}`;

export default function CartScreen() {
  const { cart, removeAt, clearCart, increase, decrease, totalPoints, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <ScreenContainer>
        <View className="flex-1 items-center justify-center gap-2 pt-6">
          <Text className="text-lg font-bold text-text">Seu carrinho está vazio</Text>
          <Text className="text-sm font-regular text-gray-500 text-center mb-3">
            Adicione itens em qualquer loja para vê-los aqui.
          </Text>
          <Link href="/home" asChild>
            <TouchableOpacity className="bg-primary py-3 px-4 rounded-xl">
              <Text className="text-white font-bold">Explorar lojas</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 24 }}
        ItemSeparatorComponent={() => <View className="h-3" />}
        renderItem={({ item, index }) => {
          const itemSubtotal = item.price * item.quantity;
          const itemPoints = item.points * item.quantity;
          return (
            <View className="bg-white border border-pink-200 rounded-xl p-3 flex-row gap-3">
              <View className="flex-1">
                <Text className="text-base font-bold text-text">{item.name}</Text>
                <Text className="text-sm font-regular text-gray-600 mt-1">
                  {money(item.price)} • {item.points} pts (unid.)
                </Text>

                <View className="flex-row items-center gap-2 mt-3">
                  <TouchableOpacity
                    onPress={() => decrease(index)}
                    className="w-8 h-8 rounded-lg bg-gray-100 items-center justify-center"
                  >
                    <Text className="text-lg font-bold text-text">−</Text>
                  </TouchableOpacity>

                  <Text className="min-w-6 text-center text-base font-bold text-text">{item.quantity}</Text>

                  <TouchableOpacity
                    onPress={() => increase(index)}
                    className="w-8 h-8 rounded-lg bg-gray-100 items-center justify-center"
                  >
                    <Text className="text-lg font-bold text-text">+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className="items-end justify-between">
                <Text className="text-sm font-bold text-primary">{money(itemSubtotal)}</Text>
                <Text className="text-xs font-regular text-gray-500">{itemPoints} pts</Text>
                <TouchableOpacity onPress={() => removeAt(index)} className="py-2 px-3 bg-pink-400 rounded-lg">
                  <Text className="text-white font-bold text-xs">Remover</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        ListFooterComponent={
          <View className="mt-4 pt-3 border-t border-gray-200 flex-row items-center justify-between">
            <View>
              <Text className="text-base font-bold text-primary">Total: {money(totalPrice)}</Text>
              <Text className="text-sm font-regular text-gray-600 mt-1">{totalPoints} pontos</Text>
            </View>
            <PrimaryButton title="Limpar carrinho" onPress={clearCart} />
          </View>
        }
      />
    </ScreenContainer>
  );
}


