import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useCart } from "../context/CartContext";
import ScreenContainer from "../components/ScreenContainer";

export default function CartScreen() {
  const { cart, increase, decrease, removeAt, clearCart, totalPoints, totalPrice } = useCart();

  return (
    <ScreenContainer>
      {cart.length === 0 ? (
        <Text style={styles.empty}>Seu carrinho está vazio 😢</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.item}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.points}>{item.points} pts</Text>
                <View style={styles.actions}>
                  <TouchableOpacity onPress={() => decrease(index)} style={styles.button}>
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.qty}>{item.quantity}</Text>
                  <TouchableOpacity onPress={() => increase(index)} style={styles.button}>
                    <Text>+</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => removeAt(index)}>
                    <Text style={styles.remove}>Remover</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />

          <View style={styles.summary}>
            <Text style={styles.total}>Total pontos: {totalPoints}</Text>
            <Text style={styles.total}>Total R$: {totalPrice.toFixed(2)}</Text>
            <TouchableOpacity onPress={clearCart} style={styles.clearBtn}>
              <Text style={styles.clearText}>Limpar Carrinho</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  empty: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "gray",
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  name: { fontSize: 16, fontWeight: "bold" },
  points: { fontSize: 14, color: "gray" },
  actions: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: "#eee",
    borderRadius: 6,
    marginHorizontal: 4,
  },
  qty: { fontSize: 16, marginHorizontal: 8 },
  remove: { color: "red", marginLeft: 8 },
  summary: { marginTop: 20, alignItems: "center" },
  total: { fontSize: 16, fontWeight: "bold", marginBottom: 8 },
  clearBtn: {
    backgroundColor: "#FF4D6D",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  clearText: { color: "#fff", fontWeight: "bold" },
});
