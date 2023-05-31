import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "../pages/welcome/Welcome";
import Todos from "../pages/todos/Todos";
import NotFound from "../pages/not-found/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Welcome />} path="/" />
        <Route element={<Todos />} path="/todos" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
