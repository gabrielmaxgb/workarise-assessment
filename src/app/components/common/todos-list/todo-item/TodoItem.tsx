import { Typography, useTheme } from "@mui/material";
import { ITodoItemProps } from "./types";
import { TodoItemContainer } from "./TodoItemStyled";
import Modal from "../../modal/Modal";
import AddTodoForm from "../../../forms/add-todo-form/AddTodoForm";
import { useState } from "react";

const TodoItem = ({ todo, todos, setTodos }: ITodoItemProps) => {
  const theme = useTheme();
  const [isTodoFormOpen, setTodoFormOpen] = useState<boolean>(false);

  return (
    <>
      <TodoItemContainer
        borderColor={theme.palette.primary.main}
        onClick={() => setTodoFormOpen(true)}
      >
        <Typography margin={"1rem 0"} variant="body1" fontSize={"1.5rem"}>
          {todo.todoDescription}
        </Typography>
        <Typography margin={"1rem 0"} variant="body1" fontSize={"1.5rem"}>
          &nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
        </Typography>
        <Typography
          id="pokemon-chip"
          margin={"1rem 0"}
          variant="body1"
          color={theme.extraColors.black}
          fontSize={"1.5rem"}
        >
          {todo.pokemon}
        </Typography>
      </TodoItemContainer>

      {isTodoFormOpen && (
        <Modal open={isTodoFormOpen} handleClose={() => setTodoFormOpen(false)}>
          <AddTodoForm
            currentTodo={todo}
            todos={todos}
            setTodos={setTodos}
            setTodoFormOpen={setTodoFormOpen}
          />
        </Modal>
      )}
    </>
  );
};

export default TodoItem;
