import React, { ReactNode } from "react";
import { SafeAreaView, StyleSheet, ViewStyle } from "react-native";

export default function ScreenContainer({
  children,
  style,
}: {
  children: ReactNode;
  style?: ViewStyle;
}) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 16,
  },
});
