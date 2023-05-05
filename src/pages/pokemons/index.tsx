import React from "react";
import Topbar from "../../components/listview/Topbar";
import PokemonList from "../../components/listview/pokemon-list/PokemonList";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import TopSearchbar from "../../components/listview/TopSearchbar";

export default function Pokemons() {
  const { pokemons, isLoading } = useAppContext();
  const location = useLocation();
  const [searchText, setSearchText] = React.useState<string>(
    location?.state ?? ""
  );
  const [pokemon, setPokemon] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (searchText !== "") {
      const filtered = pokemons.filter((poke: any) =>
        poke.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setPokemon(filtered);
    } else {
      setPokemon(pokemons);
    }
    // eslint-disable-next-line
  }, [searchText]);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [cardsPerPage, setCardsPerPage] = React.useState(8);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = pokemon.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="bg-[#F1F1F1] min-h-screen w-full">
      <Topbar value={searchText} onChange={setSearchText} />
      <div className="md:hidden flex justify-center items-center w-full h-[4rem] my-3">
        <TopSearchbar value={searchText} onChange={setSearchText} />
      </div>
      <div className="pb-4 w-full flex justify-center mt-6 items-center">
        <PokemonList
          loading={isLoading}
          currentCards={currentCards}
          currentPage={currentPage}
          cardsPerPage={cardsPerPage}
          totalCards={pokemon.length}
          paginate={paginate}
          setCardsPerPage={setCardsPerPage}
        />
      </div>
    </div>
  );
}
