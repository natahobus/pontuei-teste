import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Card from "./Card";

type StoreCardProps = {
  id: string;
  name: string;
  category: string;
  image?: string;
};

export default function StoreCard({ id, name, category, image }: StoreCardProps) {
  return (
    <Link href={`/store/${id}`} asChild>
      <TouchableOpacity activeOpacity={0.9}>
        <Card className="overflow-hidden">
          {image ? (
            <Image source={{ uri: image }} className="w-full h-28" resizeMode="cover" />
          ) : (
            <View className="w-full h-28 bg-gray-100 items-center justify-center">
              <Text className="font-medium text-gray-500">Loja</Text>
            </View>
          )}
          <View className="p-3">
            <Text className="text-base font-bold text-text">{name}</Text>
            <Text className="text-sm font-regular text-gray-600 mt-1">{category}</Text>
          </View>
        </Card>
      </TouchableOpacity>
    </Link>
  );
}
