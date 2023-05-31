import { Button, Grid, Typography, useTheme } from "@mui/material";
import { WelcomeContainer } from "./WelcomeStyled";
import welcomeBackground from "../../../assets/img/welcome-background.png";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../../components/layout/animation/AnimatedPage";

const Welcome = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleBeginClick = () => {
    navigate("/todos");
  };

  return (
    <AnimatedPage>
      <WelcomeContainer
        backgroundImage={welcomeBackground}
        linearGradientColor={theme.palette.common.black}
      >
        <Grid item container xs={12}>
          <Grid
            item
            container
            xs={12}
            justifyContent={"center"}
            alignItems={"center"}
            className="action-area"
          >
            <Button
              variant="outlined"
              size="large"
              color="secondary"
              onClick={() => handleBeginClick()}
            >
              <Typography color="secondary" variant="h1">
                Begin
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </WelcomeContainer>
    </AnimatedPage>
  );
};

export default Welcome;
