import React, { ReactNode } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export default function ContainerTela({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.content}>{children}</SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 16,
  },
});