// components/Card.tsx
import { View, StyleSheet, ViewProps } from "react-native";
import { ReactNode } from "react";

export default function Card({
  children,
  style,
  ...rest
}: { children: ReactNode } & ViewProps) {
  return (
    <View style={[styles.card, style]} {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 12,
  },
});
