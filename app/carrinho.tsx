// app/carrinho.tsx
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Link } from "expo-router";
import { useCart } from "../context/CartContext";
import ContainerTela from "../components/ContainerTela";
import BotaoPrimario from "../components/BotaoPrimario";
import theme from "../theme";

const money = (v: number) => `R$ ${v.toFixed(2).replace(".", ",")}`;

export default function CartScreen() {
  const { cart, removeAt, clearCart, increase, decrease, totalPoints, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <ContainerTela>
        <View style={styles.emptyWrap}>
          <Text style={styles.emptyTitle}>Seu carrinho está vazio</Text>
          <Text style={styles.emptySubtitle}>
            Adicione itens em qualquer loja para vê-los aqui.
          </Text>
          <Link href="/inicio" asChild>
            <TouchableOpacity style={styles.emptyCta}>
              <Text style={styles.emptyCtaText}>Explorar lojas</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ContainerTela>
    );
  }

  return (
    <ContainerTela>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 24 }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item, index }) => {
          const itemSubtotal = item.price * item.quantity;
          const itemPoints = item.points * item.quantity;
          return (
            <View style={styles.itemCard}>
              <View style={{ flex: 1 }}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemMeta}>
                  {money(item.price)} • {item.points} pts (unid.)
                </Text>

                <View style={styles.qtyRow}>
                  <TouchableOpacity
                    onPress={() => decrease(index)}
                    style={styles.qtyBtn}
                  >
                    <Text style={styles.qtyBtnText}>−</Text>
                  </TouchableOpacity>

                  <Text style={styles.qtyValue}>{item.quantity}</Text>

                  <TouchableOpacity
                    onPress={() => increase(index)}
                    style={styles.qtyBtn}
                  >
                    <Text style={styles.qtyBtnText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.itemRight}>
                <Text style={styles.itemSubtotal}>{money(itemSubtotal)}</Text>
                <Text style={styles.itemPoints}>{itemPoints} pts</Text>
                <TouchableOpacity onPress={() => removeAt(index)} style={styles.removeBtn}>
                  <Text style={styles.removeTxt}>Remover</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        ListFooterComponent={
          <View style={styles.footer}>
            <View>
              <Text style={styles.totalValue}>Total: {money(totalPrice)}</Text>
              <Text style={styles.totalPoints}>{totalPoints} pontos</Text>
            </View>
            <BotaoPrimario title="Limpar carrinho" onPress={clearCart} />
          </View>
        }
      />
    </ContainerTela>
  );
}

const styles = StyleSheet.create({
  emptyWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingTop: 24,
  },
  emptyTitle: {
    fontSize: 18,
    fontFamily: theme.fonts.bold,
    color: theme.colors.text,
  },
  emptySubtitle: {
    fontSize: 13,
    fontFamily: theme.fonts.regular,
    color: "#777",
    textAlign: "center",
    marginBottom: 12,
  },
  emptyCta: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  emptyCtaText: {
    color: "#fff",
    fontFamily: theme.fonts.bold,
  },

  itemCard: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#f8bbd0",
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    gap: 12,
  },
  itemName: {
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    color: theme.colors.text,
  },
  itemMeta: {
    marginTop: 2,
    fontSize: 13,
    fontFamily: theme.fonts.regular,
    color: "#666",
  },
  qtyRow: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  qtyBtn: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyBtnText: {
    fontSize: 18,
    fontFamily: theme.fonts.bold,
    color: theme.colors.text,
  },
  qtyValue: {
    minWidth: 24,
    textAlign: "center",
    fontSize: 15,
    fontFamily: theme.fonts.bold,
    color: theme.colors.text,
  },

  itemRight: {
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  itemSubtotal: {
    fontSize: 14,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
  },
  itemPoints: {
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    color: "#888",
  },
  removeBtn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "#f06292",
    borderRadius: 8,
  },
  removeTxt: {
    color: "#fff",
    fontFamily: theme.fonts.bold,
    fontSize: 12,
  },

  footer: {
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#f3f3f3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  totalValue: {
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
  },
  totalPoints: {
    marginTop: 2,
    fontSize: 13,
    fontFamily: theme.fonts.regular,
    color: "#666",
  },
});

