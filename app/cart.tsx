// app/cart.tsx
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useCart } from "../context/CartContext";

export default function CartScreen() {
  const { cart, increase, decrease, removeAt, clearCart, totalPoints, totalPrice } = useCart();

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.empty}>Seu carrinho está vazio</Text>}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.points}>
                {item.points} pontos • R$ {item.price}
              </Text>
            </View>

            <View style={styles.actions}>
              <TouchableOpacity onPress={() => decrease(index)} style={styles.button}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => increase(index)} style={styles.button}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {cart.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.total}>
            Total: {totalPoints} pontos • R$ {totalPrice.toFixed(2)}
          </Text>
          <TouchableOpacity onPress={clearCart} style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar Carrinho</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  empty: { textAlign: "center", marginTop: 32, fontSize: 16, color: "gray" },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  name: { fontSize: 16, fontWeight: "bold" },
  points: { fontSize: 14, color: "gray" },
  actions: { flexDirection: "row", alignItems: "center" },
  button: {
    backgroundColor: "#FF4D6D",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  buttonText: { color: "#fff", fontSize: 18 },
  quantity: { marginHorizontal: 8, fontSize: 16, fontWeight: "bold" },
  footer: { marginTop: 16, alignItems: "center" },
  total: { fontSize: 16, fontWeight: "bold" },
  clearButton: {
    marginTop: 8,
    backgroundColor: "#ddd",
    padding: 8,
    borderRadius: 6,
  },
  clearText: { color: "#333" },
});
