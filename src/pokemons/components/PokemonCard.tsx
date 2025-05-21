"use client";
import { useAppSelector } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "@/store/pokemons/pokemons";
import { useState } from "react";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id]);
  const dispatch = useDispatch();
  const onToggle = () => {
    dispatch(toggleFavorite(pokemon));
  };
  const [hasError, setHasError] = useState(false);
  const spriteUrl = hasError
    ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`
    : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            key={pokemon.id}
            src={spriteUrl}
            alt={pokemon.name}
            width={100}
            height={100}
            priority={false}
            onError={() => setHasError(true)}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemon/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Más información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            onClick={onToggle}
            className="items-center px-4 py-2 hover:bg-gray-100 flex cursor-pointer"
          >
            <div className="text-red-600">
              {isFavorite ? <IoHeart /> : <IoHeartOutline />}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? "Es Favorito" : "No es favorito"}
              </p>

              <p className="text-xs text-gray-500">Click para cambiar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
