// components/StoreCard.tsx
import { Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Card from "./card";
import { colors } from "../theme";

export default function StoreCard({ loja }: any) {
  return (
    <Link href={`/store/${loja.id}`} asChild>
      <TouchableOpacity>
        <Card>
          <Text style={{ fontSize: 18, fontFamily: "Poppins-Bold", color: colors.text }}>
            {loja.nome}
          </Text>
          <Text style={{ color: colors.gray }}>{loja.categoria}</Text>
        </Card>
      </TouchableOpacity>
    </Link>
  );
}
