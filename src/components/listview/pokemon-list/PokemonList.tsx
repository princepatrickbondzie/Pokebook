import React from "react";
import Pagination from "./Pagination";
import PokemonCard from "./PokemonCard";
import Drawer from "./Drawer";

export default function PokemonList(props: any) {
  return (
    <div>
      <Drawer />
      <div>
        {props.loading ? (
          <div className="flex justify-center items-center">
            <h1>Pokemons loading....</h1>
          </div>
        ) : (
          <>
            {props.currentCards.length === 0 ? (
              <div className="flex justify-center items-center">
                <h1>No Pokemons available....</h1>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-3 mb-4 justify-center">
                {props.currentCards.map((poke: any) => (
                  <PokemonCard key={poke.id} poke={poke} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <div>
        <Pagination
          currentPage={props.currentPage}
          cardsPerPage={props.cardsPerPage}
          totalCards={props.totalCards}
          paginate={props.paginate}
          setCardsPerPage={props.setCardsPerPage}
        />
      </div>
    </div>
  );
}
