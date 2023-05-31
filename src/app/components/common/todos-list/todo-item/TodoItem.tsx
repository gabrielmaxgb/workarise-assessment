import { Typography, useTheme } from "@mui/material";
import { ITodoItemProps } from "./types";
import { TodoItemContainer } from "./TodoItemStyled";
import Modal from "../../modal/Modal";
import AddTodoForm from "../../../forms/add-todo-form/AddTodoForm";
import { useState } from "react";

const TodoItem = ({ todo, todos, setTodos }: ITodoItemProps) => {
  const theme = useTheme();
  const [isTodoFormOpen, setTodoFormOpen] = useState<boolean>(false);

  console.log("TODOITEM", todos);

  return (
    <>
      <TodoItemContainer
        borderColor={theme.palette.primary.main}
        onClick={() => setTodoFormOpen(true)}
      >
        <Typography margin={"1rem 0"} variant="h3">
          {todo.todoDescription}
        </Typography>
        <Typography margin={"1rem 0"} variant="h5">
          -
        </Typography>
        <Typography margin={"1rem 0"} variant="h5">
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
