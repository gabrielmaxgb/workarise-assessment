import AnimatedPage from "../../components/layout/animation/AnimatedPage";
import { TodosContainer } from "./TodosStyled";
import { Typography } from "@mui/material";
import TodosList from "../../components/common/todos-list/TodosList";

const Todos = () => {
  return (
    <AnimatedPage>
      <TodosContainer>
        <Typography mb={"2rem"} variant="h1" color="secondary">
          Todos
        </Typography>
        <TodosList />
      </TodosContainer>
    </AnimatedPage>
  );
};

export default Todos;
