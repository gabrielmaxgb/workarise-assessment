export interface IPokemonListProps {
  setPokemonSelected: React.Dispatch<React.SetStateAction<string>>;
  pokemonSelected: string;
}

export interface IPokemonListContainer {
  arrowButtonColor: string;
}

export interface IFormSubmissionValues {
  pokemonInput: string;
}
