import { useCallback, useEffect, useState } from "react";
import { PokemonListContainer } from "./PokemonListStyled";
import PokemonItem from "./pokemon-item/PokemonItem";
import { getData } from "../../../../services/getData";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Button,
  CircularProgress,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { IFormSubmissionValues, IPokemonListProps } from "./types";
import { BASE_URL } from "../../../../services/constants/consts";
import { Formik } from "formik";
import { FormContainer } from "../../forms/add-todo-form/AddTodoFormStyled";
import { InputField } from "../../forms/FormFieldsStyled";

const PokemonList = ({
  setPokemonSelected,
  pokemonSelected,
}: IPokemonListProps) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const [pokemonData, setPokemonData] = useState<any>();
  const [pokemonInput, setPokemonInput] = useState<string>("");
  const [pokemonInputData, setPokemonInputData] = useState<any>();
  const [getDataError, setGetDataError] = useState<boolean>(false);
  const [getDataLoading, setGetDataLoading] = useState<boolean>(false);
  const [actionButtonLoading, setActionButtonLoading] =
    useState<boolean>(false);

  console.log("pokemonInputData", pokemonInputData);

  useEffect(() => {
    (async () => {
      setGetDataLoading(true);
      const endpoint: string = pokemonInput
        ? pokemonInput
        : `?limit=${md ? 3 : 5}`;
      const pokemonDataResponse: any = await getData(
        // `${BASE_URL}/pokemon/?limit=${md ? 3 : 5}`
        `${BASE_URL}/pokemon/${endpoint}`
      );
      console.log("resp pokemonData", pokemonDataResponse);
      if (pokemonInput) {
        if (pokemonDataResponse?.id) {
          setPokemonInputData(pokemonDataResponse);
          setGetDataError(false);
          setGetDataLoading(false);
          return;
        }
        setPokemonInputData(undefined);
        setPokemonData(undefined);
        setGetDataError(true);
        setGetDataLoading(false);
        return;
      }
      setPokemonData(pokemonDataResponse);
      setGetDataError(false);
      setGetDataLoading(false);
    })();
  }, [md, pokemonInput]);

  const renderPokemonItems = useCallback(() => {
    const r = pokemonData?.results?.map((pokemon: any) => {
      console.log("briga pokemon", pokemon);
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

  const handleFormSubmtion = (values: IFormSubmissionValues) => {
    console.log("handle submit values", values.pokemonInput.toLowerCase());
    setPokemonInput(values.pokemonInput.toLowerCase());
  };

  return (
    <PokemonListContainer arrowButtonColor={theme.palette.primary.main}>
      {xs ? (
        <div id="form-container">
          <Formik
            initialValues={{
              pokemonInput: "",
            }}
            onSubmit={handleFormSubmtion}
          >
            {(props) => {
              return (
                <FormContainer onSubmit={props.handleSubmit}>
                  <label htmlFor="pokemon-input">
                    <Typography>Pokemon:</Typography>
                  </label>
                  <InputField
                    id="pokemon-input"
                    textColor={theme.palette.primary.main}
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.pokemonInput}
                    name="pokemonInput"
                  />
                  {props.errors.pokemonInput && (
                    <Typography variant="body1" id="feedback">
                      {props.errors.pokemonInput}
                    </Typography>
                  )}
                  <Button
                    size="large"
                    disabled={props.values.pokemonInput === ""}
                    variant="contained"
                    type="submit"
                  >
                    Search
                  </Button>
                </FormContainer>
              );
            }}
          </Formik>
          {getDataLoading ? (
            <CircularProgress />
          ) : (
            <>
              {pokemonInputData && (
                <PokemonItem
                  key={pokemonInputData.name}
                  pokemonSelected={pokemonSelected}
                  setPokemonSelected={setPokemonSelected}
                  pokemon={{
                    name: pokemonInputData.name,
                    url: `https://pokeapi.co/api/v2/pokemon/${pokemonInputData.id}/`,
                  }}
                />
              )}
              {getDataError && <Typography>Pokemon not found</Typography>}
            </>
          )}
        </div>
      ) : actionButtonLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Button
            disabled={!pokemonData?.previous}
            onClick={() => handleBackArrowClick()}
            variant="contained"
          >
            <ArrowBackIosNewIcon />
          </Button>
          {renderPokemonItems()}
          <Button
            disabled={!pokemonData?.next}
            onClick={() => handleForwardArrowClick()}
            variant="contained"
          >
            <ArrowForwardIosIcon />
          </Button>
        </>
      )}
    </PokemonListContainer>
  );
};

export default PokemonList;
