import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../../context/CartContext";

const money = (v: number) => `R$ ${v.toFixed(2).replace(".", ",")}`;

export default function CartScreen() {
  const { cart, removeAt, clearCart, totalPoints, totalPrice } = useCart();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <Ionicons name="cart-outline" size={22} color="#e91e63" />
        <Text style={styles.title}>Carrinho</Text>
      </View>

      {cart.length === 0 ? (
        <Text style={styles.empty}>Seu carrinho está vazio.</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(_, index) => String(index)}
            renderItem={({ item, index }) => (
              <View style={styles.item}>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.meta}>
                    {money(item.price)} • {item.points} pontos
                  </Text>
                </View>
                <TouchableOpacity style={styles.removeBtn} onPress={() => removeAt(index)}>
                  <Text style={styles.removeTxt}>Remover</Text>
                </TouchableOpacity>
              </View>
            )}
          />

          <View style={styles.footer}>
            <View>
              <Text style={styles.total}>Total: {money(totalPrice)}</Text>
              <Text style={styles.subtotal}>{totalPoints} pontos</Text>
            </View>
            <TouchableOpacity style={styles.clearBtn} onPress={clearCart}>
              <Text style={styles.clearTxt}>Limpar</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 16 },
  headerRow: { flexDirection: "row", alignItems: "center", marginBottom: 16, gap: 8 },
  title: { fontSize: 20, fontWeight: "bold", color: "#e91e63" },
  empty: { textAlign: "center", color: "#666", marginTop: 20 },
  item: { backgroundColor: "#fce4ec", padding: 12, borderRadius: 10, marginBottom: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  name: { fontSize: 16, fontWeight: "600" },
  meta: { fontSize: 13, color: "#ec407a", marginTop: 2 },
  removeBtn: { paddingVertical: 8, paddingHorizontal: 12, backgroundColor: "#f06292", borderRadius: 8 },
  removeTxt: { color: "#fff", fontWeight: "bold" },
  footer: { marginTop: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  total: { fontSize: 16, fontWeight: "700", color: "#e91e63" },
  subtotal: { fontSize: 13, color: "#666", marginTop: 2 },
  clearBtn: { backgroundColor: "#ec407a", paddingVertical: 12, paddingHorizontal: 16, borderRadius: 8 },
  clearTxt: { color: "#fff", fontWeight: "bold" },
});
