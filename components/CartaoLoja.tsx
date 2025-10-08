import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import Cartao from "./Cartao";
import theme from "../theme";

type CartaoLojaProps = {
  id: string;
  name: string;
  category: string;
  image?: string;
};

export default function CartaoLoja({ id, name, category, image }: CartaoLojaProps) {
  return (
    <Link href={`/loja/${id}`} asChild>
      <TouchableOpacity activeOpacity={0.9}>
        <Cartao style={styles.card}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
          ) : (
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>Loja</Text>
            </View>
          )}
          <View style={styles.content}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.category}>{category}</Text>
          </View>
        </Cartao>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    padding: 0,
  },
  image: {
    width: "100%",
    height: 112,
  },
  placeholder: {
    width: "100%",
    height: 112,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    fontFamily: theme.fonts.medium,
    color: "#777",
  },
  content: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    color: theme.colors.text,
  },
  category: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: "#666",
    marginTop: 4,
  },
});