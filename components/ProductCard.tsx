// components/ProductCard.tsx
import { View, Text, StyleSheet } from "react-native";
import { useCart } from "../context/CartContext";
import PrimaryButton from "./PrimaryButton";
import Card from "./Card";
import { colors } from "../theme";

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <Card>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.points}>{product.points} pontos</Text>
      <PrimaryButton title="Adicionar" onPress={() => addToCart(product)} />
    </Card>
  );
}

const styles = StyleSheet.create({
  name: { fontSize: 16, fontFamily: "Poppins-Bold", marginBottom: 4 },
  points: { fontSize: 14, color: colors.gray, marginBottom: 8 },
});
