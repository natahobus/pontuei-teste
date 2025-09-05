// components/ProductCard.tsx
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.points}>{product.points} pontos</Text>
      <TouchableOpacity style={styles.button} onPress={() => addToCart(product)}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  name: { fontSize: 16, fontWeight: "bold" },
  points: { fontSize: 14, color: "gray" },
  button: {
    marginTop: 8,
    backgroundColor: "#FF4D6D",
    padding: 8,
    borderRadius: 6,
  },
  buttonText: { color: "#fff", textAlign: "center" },
});
