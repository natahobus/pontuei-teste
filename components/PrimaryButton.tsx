// components/PrimaryButton.tsx
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../theme";

type Props = {
  title: string;
  onPress: () => void;
};

export default function PrimaryButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
  },
});
