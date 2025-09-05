import { Ionicons } from "@expo/vector-icons";
import { useCart } from "../context/CartContext";

export default function CartIcon({ color, size }: { color: string; size: number }) {
  const { cart } = useCart();
  return (
    <Ionicons
      name={cart.length > 0 ? "cart" : "cart-outline"}
      size={size}
      color={color}
    />
  );
}
