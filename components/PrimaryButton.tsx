import React from "react";
import { TouchableOpacity, Text } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  className?: string;
};

export default function PrimaryButton({ title, onPress, className }: Props) {
  return (
    <TouchableOpacity className={`bg-primary py-3 px-5 rounded-xl items-center ${className || ""}`} onPress={onPress}>
      <Text className="text-white text-base font-medium">{title}</Text>
    </TouchableOpacity>
  );
}
