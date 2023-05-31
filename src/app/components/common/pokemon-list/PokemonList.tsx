import { useCallback, useEffect, useState } from "react";
import { PokemonListContainer } from "./PokemonListStyled";
import PokemonItem from "./pokemon-item/PokemonItem";
import { getData } from "../../../../services/getData";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, CircularProgress, useTheme } from "@mui/material";
import { IPokemonListProps } from "./types";
import { BASE_URL } from "../../../../services/constants/consts";

const PokemonList = ({
  setPokemonSelected,
  pokemonSelected,
}: IPokemonListProps) => {
  const theme = useTheme();
  const [pokemonData, setPokemonData] = useState<any>();
  const [actionButtonLoading, setActionButtonLoading] =
    useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const pokemonData: any = await getData(`${BASE_URL}/pokemon/?limit=5`);
      setPokemonData(pokemonData);
    })();
  }, []);

  const renderPokemonItems = useCallback(() => {
    const r = pokemonData?.results?.map((pokemon: any) => {
      return (
        <PokemonItem
          key={pokemon.name}
          pokemonSelected={pokemonSelected}
          setPokemonSelected={setPokemonSelected}
          pokemon={pokemon}
        />
      );
    });
    return r;
  }, [pokemonData?.results, pokemonSelected, setPokemonSelected]);

  const handleForwardArrowClick = async () => {
    setActionButtonLoading(true);
    const tempPokemonData = await getData(pokemonData.next);
    setPokemonData(tempPokemonData);
    setActionButtonLoading(false);
  };

  const handleBackArrowClick = async () => {
    setActionButtonLoading(true);
    if (pokemonData.previous) {
      const tempPokemonData = await getData(pokemonData.previous);
      setPokemonData(tempPokemonData);
    }
    setActionButtonLoading(false);
  };

  return (
    <PokemonListContainer arrowButtonColor={theme.palette.primary.main}>
      <Button
        disabled={!pokemonData?.previous}
        onClick={() => handleBackArrowClick()}
        variant="contained"
      >
        <ArrowBackIosNewIcon />
      </Button>
      {actionButtonLoading ? <CircularProgress /> : renderPokemonItems()}
      <Button
        disabled={!pokemonData?.next}
        onClick={() => handleForwardArrowClick()}
        variant="contained"
      >
        <ArrowForwardIosIcon />
      </Button>
    </PokemonListContainer>
  );
};

export default PokemonList;
