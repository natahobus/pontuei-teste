// components/CartaoProduto.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Product } from "../data/stores";
import { useCart } from "../context/CartContext";
import Cartao from "./Cartao";
import BotaoPrimario from "./BotaoPrimario";
import theme from "../theme";

type Props = {
  product: Product;
};

const money = (v: number) => `R$ ${v.toFixed(2).replace(".", ",")}`;

export default function CartaoProduto({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <Cartao style={styles.card}>
      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>
            {money(product.price)} • {product.points} pontos
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <BotaoPrimario title="Adicionar" onPress={() => addToCart(product)} />
        </View>
      </View>
    </Cartao>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    marginBottom: 12,
  },
  content: {
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
  price: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: "#666",
    marginTop: 4,
  },
  buttonContainer: {
    width: 120,
  },
});