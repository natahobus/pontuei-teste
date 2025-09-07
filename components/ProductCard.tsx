// components/ProductCard.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Product } from "../data/stores";
import { useCart } from "../context/CartContext";
import Card from "./Card";
import PrimaryButton from "./PrimaryButton";
import theme from "../theme";

type Props = {
  product: Product;
};

const money = (v: number) => `R$ ${v.toFixed(2).replace(".", ",")}`;

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <Card style={styles.card}>
      <View style={styles.row}>
        <View style={styles.info}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.meta}>
            {money(product.price)} • {product.points} pontos
          </Text>
        </View>

        <View style={styles.buttonWrap}>
          <PrimaryButton title="Adicionar" onPress={() => addToCart(product)} />
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    flex: 1,
    paddingRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    color: theme.colors.text,
  },
  meta: {
    marginTop: 4,
    fontSize: 13,
    fontFamily: theme.fonts.regular,
    color: "#666",
  },
  buttonWrap: {
    width: 120, // dá um tamanho consistente ao botão
  },
});
