import { Button, Typography } from "@mui/material";
import { NotFoundContainer } from "./NotFoundStyled";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <Typography mb={"2rem"} variant="h3">
        Nothing here
      </Typography>
      <Button variant="contained" size="large" onClick={() => navigate("/")}>
        Get out
      </Button>
    </NotFoundContainer>
  );
};

export default NotFound;
