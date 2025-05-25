import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoHeartOutline,
} from "react-icons/io5";

export const menuItems = [
  {
    path: "/dashboard/main",
    icon: IoBrowsersOutline,
    title: "Dashboard",
    subTitle: "Visualización",
  },
  {
    path: "/dashboard/counter",
    icon: IoCalculator,
    title: "Counter",
    subTitle: "Contador Client Side",
  },
  {
    path: "/dashboard/pokemons",
    icon: IoFootball,
    title: "Pokemons",
    subTitle: "Generación estática",
  },
  {
    path: "/dashboard/favorites",
    icon: IoHeartOutline,
    title: "Favoritos",
    subTitle: "Global state",
  },
];
