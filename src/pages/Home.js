import { useLocation } from "react-router-dom";
import Lottie from "react-lottie";
import { default as animationData } from "../lottie/welcome.json";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};
const Home = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        flexDirection: "column",
      }}
    >
      <Button
        onClick={() => {
          navigate("/login", { state: { email: null }, replace: true });
        }}
        variant="contained"
        color="secondary"
      >
        logout
      </Button>
      <div>
        <Lottie options={defaultOptions} />
      </div>
      <h1
        style={{
          fontSize: "30px",
          marginTop: "0",
          textAlign: "center",
          color: "white",
        }}
      >{`welcome back ${state?.email}`}</h1>
    </div>
  );
};

export default Home;
