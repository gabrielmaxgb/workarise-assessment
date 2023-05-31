export interface IInputFieldStyled {
  textColor: string;
}

export interface ITodos {
  todoDescription: string;
  id: string;
  pokemon: string;
}

export interface IFormSubmissionValues {
  todoDescription: string;
}

export interface IAddTodoFormProps {
  todos: ITodos[];
  currentTodo?: ITodos;
  setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
  setTodoFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
