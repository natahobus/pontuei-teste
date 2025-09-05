export type Product = { id: string; name: string; points: number; price: number };
export type Store = { id: string; name: string; category: string; products: Product[] };

export const stores: Store[] = [
  {
    id: "1",
    name: "Diadê Cafeteria",
    category: "Cafeteria",
    products: [
      { id: "p1", name: "Café Expresso", points: 10, price: 5 },
      { id: "p2", name: "Cappuccino", points: 15, price: 8 },
      { id: "p3", name: "Pão de Queijo", points: 8, price: 6 },
      { id: "p4", name: "Croissant", points: 12, price: 7.5 },
    ],
  },
  {
    id: "2",
    name: "Santa Barba Barbearia",
    category: "Barbearia",
    products: [
      { id: "p5", name: "Corte de Cabelo", points: 50, price: 35 },
      { id: "p6", name: "Barba Completa", points: 40, price: 25 },
      { id: "p7", name: "Combo Corte + Barba", points: 80, price: 55 },
      { id: "p8", name: "Hidratação Capilar", points: 25, price: 20 },
    ],
  },
  {
    id: "3",
    name: "Nicolini Supermercado",
    category: "Supermercado",
    products: [
      { id: "p9", name: "Arroz 5kg", points: 25, price: 24.9 },
      { id: "p10", name: "Feijão 1kg", points: 10, price: 8.5 },
      { id: "p11", name: "Óleo 900ml", points: 12, price: 7.2 },
      { id: "p12", name: "Leite 1L", points: 8, price: 5.3 },
    ],
  },
];
