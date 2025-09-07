import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Card from "./Card";
import theme from "../theme";

type StoreCardProps = {
  id: string;
  name: string;
  category: string;
  image?: string; // opcional
};

export default function StoreCard({ id, name, category, image }: StoreCardProps) {
  return (
    <Link href={`/store/${id}`} asChild>
      <TouchableOpacity activeOpacity={0.9}>
        <Card>
          <View style={styles.wrap}>
            {image ? (
              <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
            ) : (
              <View style={[styles.image, styles.placeholder]}>
                <Text style={styles.placeholderText}>Loja</Text>
              </View>
            )}

            <View style={styles.info}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.category}>{category}</Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  wrap: {
    overflow: "hidden",
    borderRadius: 12, // borda arredondada do conteúdo interno
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 110,
  },
  placeholder: {
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    fontFamily: theme.fonts.medium,
    color: "#777",
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    color: theme.colors.text,
  },
  category: {
    marginTop: 4,
    fontSize: 13,
    fontFamily: theme.fonts.regular,
    color: "#666",
  },
});
