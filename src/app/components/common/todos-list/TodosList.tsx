import { Button, Typography, useTheme } from "@mui/material";
import { TodosListContainer } from "./TododsListStyled";
import { useCallback, useState } from "react";
import Modal from "../modal/Modal";
import { Formik, Form } from "formik";
import AddTodoForm from "../../forms/add-todo-form/AddTodoForm.tsx";
import { ITodos } from "../../forms/add-todo-form/types.ts";
import TodoItem from "./todo-item/TodoItem.tsx";

const TodosList = () => {
  const theme = useTheme();
  const [isTodoFormOpen, setTodoFormOpen] = useState<boolean>(false);
  const [todos, setTodos] = useState<ITodos[]>([]);

  const renderTodos: any = useCallback(() => {
    return todos.map((todo) => {
      return <TodoItem todo={todo} todos={todos} setTodos={setTodos} />;
    });
  }, [todos]);

  return (
    <>
      <TodosListContainer
        borderColor={theme.palette.secondary.main}
        item
        container
        flexDirection="column"
        xs={11}
        sm={10}
        md={8}
      >
        <Button
          variant="outlined"
          sx={{ margin: "1rem 0" }}
          onClick={() => setTodoFormOpen(true)}
        >
          Add todo
        </Button>
        {renderTodos()}
      </TodosListContainer>

      {isTodoFormOpen && (
        <Modal open={isTodoFormOpen} handleClose={() => setTodoFormOpen(false)}>
          <AddTodoForm
            todos={todos}
            setTodos={setTodos}
            setTodoFormOpen={setTodoFormOpen}
          />
        </Modal>
      )}
    </>
  );
};

export default TodosList;
