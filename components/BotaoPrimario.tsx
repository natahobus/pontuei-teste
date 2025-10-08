import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import theme from "../theme";

type Props = {
  title: string;
  onPress: () => void;
};

export default function BotaoPrimario({ title, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontFamily: theme.fonts.medium,
  },
});