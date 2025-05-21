import { FavoritePokemons } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "Pokemons",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons favoritos <small className="text-blue-500">Global state</small>
      </span>
      <FavoritePokemons />
    </div>
  );
}

