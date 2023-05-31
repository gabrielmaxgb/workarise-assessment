import { ITodos } from "../../../forms/add-todo-form/types";

export interface ITodoItemProps {
  todo: ITodos;
  todos: ITodos[];
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
}

export interface ITodoItemContainerStyled {
  borderColor: string;
}
