// app/cart.tsx
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useCart } from "../context/CartContext";
import ScreenContainer from "../components/ScreenContainer";

export default function CartScreen() {
  const { cart, removeAt, increase, decrease, totalPoints, totalPrice } = useCart();

  return (
    <ScreenContainer>
      {cart.length === 0 ? (
        <Text style={styles.empty}>Seu carrinho está vazio 😢</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item, index) => item.id + index}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.points} pts</Text>
              <Text>R$ {item.price.toFixed(2)}</Text>
              <View style={styles.actions}>
                <TouchableOpacity onPress={() => decrease(index)}>
                  <Text style={styles.actionBtn}>-</Text>
                </TouchableOpacity>
                <Text style={styles.qty}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => increase(index)}>
                  <Text style={styles.actionBtn}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeAt(index)}>
                  <Text style={styles.remove}>🗑️</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
      {cart.length > 0 && (
        <View style={styles.summary}>
          <Text>Total: {totalPoints} pts</Text>
          <Text>R$ {totalPrice.toFixed(2)}</Text>
        </View>
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
    backgroundColor: "#f9f9f9",
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
  },
  name: { fontWeight: "bold", fontSize: 16, marginBottom: 4 },
  actions: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  actionBtn: {
    fontSize: 18,
    width: 28,
    textAlign: "center",
    backgroundColor: "#eee",
    borderRadius: 6,
  },
  qty: { marginHorizontal: 12, fontSize: 16 },
  remove: { marginLeft: 12, fontSize: 18, color: "red" },
  summary: {
    marginTop: 16,
    padding: 16,
    backgroundColor: "#eee",
    borderRadius: 8,
  },
});
