import { Button, TextField, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import PokemonList from "../../common/pokemon-list/PokemonList";
import { Formik, useFormik } from "formik";
import { FormContainer, InputField } from "./AddTodoFormStyled";
import { v4 as uuidv4 } from "uuid";
import { IAddTodoFormProps, IFormSubmissionValues, ITodos } from "./types";

const AddTodoForm = ({
  currentTodo,
  todos,
  setTodos,
  setTodoFormOpen,
}: IAddTodoFormProps) => {
  const theme = useTheme();
  const [pokemonSelected, setPokemonSelected] = useState<string>("");

  useEffect(() => {
    if (currentTodo) {
      setPokemonSelected(currentTodo.pokemon);
    }
  }, []);

  const handleFormSubmtion = (values: IFormSubmissionValues) => {
    if (currentTodo) {
      todos?.map((todo) => {
        if (todo.id === currentTodo.id) {
          todo.pokemon = pokemonSelected;
          todo.todoDescription = values.todoDescription;
        }
      });
      setTodoFormOpen(false);
    } else {
      const updatedTodos = [
        ...todos,
        {
          todoDescription: values.todoDescription,
          id: uuidv4(),
          pokemon: pokemonSelected,
        },
      ];
      console.log("updatedTodos", updatedTodos);
      setTodos(updatedTodos);
      setTodoFormOpen(false);
    }
  };

  const handleDeleteTodo = () => {
    const updatedTodos = todos.filter((todo) => todo.id !== currentTodo?.id);
    setTodos(updatedTodos);
    setTodoFormOpen(false);
  };

  return (
    <>
      <PokemonList
        pokemonSelected={pokemonSelected}
        setPokemonSelected={setPokemonSelected}
      />
      <Formik
        initialValues={{
          todoDescription: currentTodo
            ? currentTodo.todoDescription
            : "Type here your new todo",
        }}
        onSubmit={handleFormSubmtion}
      >
        {(props) => {
          return (
            <FormContainer onSubmit={props.handleSubmit}>
              <label htmlFor="todo-description">
                <Typography>Todo description:</Typography>
              </label>
              <InputField
                id="todo-description"
                textColor={theme.palette.primary.main}
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.todoDescription}
                name="todoDescription"
              />
              {props.errors.todoDescription && (
                <div id="feedback">{props.errors.todoDescription}</div>
              )}
              <Button
                size="large"
                variant="contained"
                disabled={
                  pokemonSelected === "" ||
                  props.values.todoDescription === "" ||
                  props.values.todoDescription === "Type here your new todo"
                }
                type="submit"
              >
                {currentTodo ? "Edit" : "Add"}
              </Button>
              {currentTodo && (
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteTodo()}
                  sx={{ marginTop: "1rem" }}
                >
                  Delete todo
                </Button>
              )}
            </FormContainer>
          );
        }}
      </Formik>
    </>
  );
};

export default AddTodoForm;
