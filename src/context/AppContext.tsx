import React, { createContext, useContext, useEffect, useState } from "react";
import { getPokmanData } from "../utils/utils";

interface Pokemon {
  name: string;
  url: string;
  img: string;
  types: {
    one: string;
    two: string | null;
  };
  about: {
    height: number;
    weight: number;
    abilities: { ability: { name: string } }[];
  };
  stats: { base_stat: number; stat: { name: string } }[];
  similar: { type: { name: string } }[];
}

interface AppContextValue {
  pokemons: Pokemon[];
  isLoading: boolean;
  error: Error | null;
}

const AppContext = createContext<AppContextValue>({
  pokemons: [],
  isLoading: false,
  error: null,
});

const useAppContext = () => useContext(AppContext);

interface AppContextProviderProps {
  children: React.ReactNode;
}

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [pokemonList, setPokemonList] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const fetchPokemonList = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=500"
      );
      const data = await response.json();
      setPokemonList(data.results.map((p: any) => p.url));
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPokemonData = async (urls: string[]) => {
    const promises = urls.map(async (url) => {
      try {
        const data = await getPokmanData(url);
        const newPokemon: Pokemon = {
          name: data.name,
          url,
          img: data.sprites.other["official-artwork"].front_default,
          types: {
            one: data.types[0].type.name,
            two: data.types[1]?.type.name ?? null,
          },
          about: {
            height: data.height,
            weight: data.weight,
            abilities: data.abilities,
          },
          stats: data.stats,
          similar: data.types,
        };
        return newPokemon;
      } catch (error) {
        console.error(`Failed to fetch data for ${url}`, error);
        return null;
      }
    });

    const resolvedPromises = await Promise.all(promises);
    const filteredPokemon = resolvedPromises.filter(
      (p) => p !== null
    ) as Pokemon[];
    localStorage.setItem("pokemons", JSON.stringify(filteredPokemon));
    setPokemons(filteredPokemon);
  };

  useEffect(() => {
    const localData = localStorage.getItem("pokemons");
    if (localData) {
      setPokemons(JSON.parse(localData));
      setIsLoading(false);
    } else {
      fetchPokemonList();
    }
  }, []);

  useEffect(() => {
    if (pokemonList.length > 0) {
      fetchPokemonData(pokemonList);
    }
  }, [pokemonList]);

  return (
    <AppContext.Provider value={{ pokemons, isLoading, error }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, useAppContext, AppContextProvider };
