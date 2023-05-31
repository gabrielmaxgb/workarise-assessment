import { useEffect, useState } from "react";
import { PokemonItemContainer } from "./PokemonItemStyled";
import { IPokemonItemProps } from "./types";
import { Typography } from "@mui/material";

const PokemonItem = ({
  pokemon,
  setPokemonSelected,
  pokemonSelected,
}: IPokemonItemProps) => {
  const [isPokemonSelected, setIsPokemonSelected] = useState(false);

  useEffect(() => {
    if (pokemon.name === pokemonSelected) {
      setIsPokemonSelected(true);
      return;
    }
    setIsPokemonSelected(false);
  }, [pokemon, pokemonSelected, setIsPokemonSelected]);

  return (
    <PokemonItemContainer
      variant={isPokemonSelected ? "outlined" : "text"}
      onClick={() => setPokemonSelected(pokemon.name)}
    >
      <Typography variant="body1">{pokemon.name}</Typography>
    </PokemonItemContainer>
  );
};

export default PokemonItem;
