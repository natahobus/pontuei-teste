import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function StoreCard({ loja }: any) {
  return (
    <Link href={`/store/${loja.id}`} asChild>
      <TouchableOpacity
        style={{
          padding: 16,
          marginBottom: 12,
          backgroundColor: "#f5f5f5",
          borderRadius: 8,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{loja.nome}</Text>
        <Text>{loja.categoria}</Text>
      </TouchableOpacity>
    </Link>
  );
}
