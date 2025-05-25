import { FavoritePokemons } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "Pokemons",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-xl md:text-3xl my-2 flex justify-center">
        Pokemons favoritos -<span className="text-blue-500 ml-1">Global state</span>
      </span>
      <FavoritePokemons />
    </div>
  );
}
