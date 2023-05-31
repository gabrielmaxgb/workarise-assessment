import "./App.css";
import { FullWidthContainer } from "./app/components/layout/full-width-container/FullWidthContainer";
import AppRoutes from "./app/routes/appRoutes";

function App() {
  return (
    <FullWidthContainer>
      <AppRoutes />
    </FullWidthContainer>
  );
}

export default App;
