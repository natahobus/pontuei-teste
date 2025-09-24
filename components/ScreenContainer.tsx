import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native";

export default function ScreenContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <SafeAreaView className={`flex-1 p-4 ${className || ""}`}>{children}</SafeAreaView>
    </SafeAreaView>
  );
}
