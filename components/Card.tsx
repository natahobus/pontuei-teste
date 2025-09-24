// components/Card.tsx
import { View, ViewProps } from "react-native";
import { ReactNode } from "react";

export default function Card({
  children,
  className,
  ...rest
}: { children: ReactNode; className?: string } & ViewProps) {
  return (
    <View className={`bg-white rounded-2xl p-4 shadow-sm mb-3 ${className || ""}`} {...rest}>
      {children}
    </View>
  );
}
