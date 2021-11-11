import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import LoginIcon from "@mui/icons-material/Login";
import Lottie from "react-lottie";
import { default as animationData } from "../lottie/login.json";
import CustomTextField from "../components/CustomTextField";
import { generateCaptcha } from "../helpers/generateCaptcha";
import { useNavigate } from "react-router-dom";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

const Login = () => {
  const doopMail = "kooapp@gmail.com";
  const doopPassword = "kooapp";
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [showCaptcha, setShowCaptcha] = useState(false);
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const matches = useMediaQuery("(max-width:768px)");
  const verifyCaptcha = () => {
    const sx = text === generatedCaptcha;
    setCaptchaVerified(!sx);
    sx && setShowCaptcha(false);
    sx && alert("Please enter username and password to login");
  };
  const { email, password } = user;
  const navigate = useNavigate();
  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const createCaptcha = () => {
    const captcha = generateCaptcha();
    setGeneratedCaptcha(captcha);
    setCaptchaVerified(false);
    setText("");
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (showCaptcha && !captchaVerified) {
      return alert("captcha failed, please try again");
    }
    if (email === doopMail && password === doopPassword && !showCaptcha) {
      navigate("/", { state: { email }, replace: true });
    } else {
      if (number < 2) {
        setNumber(number + 1);
        alert("username or password is incorrect");
      } else {
        setNumber(0);
        setShowCaptcha(true);
        createCaptcha();
        // setUser({ name: "", email: "" });
      }
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleCaptcha = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <Grid container sx={{ background: "#131345" }}>
        <Grid item md={6} xs={false}>
          <Paper
            sx={{
              background: "#131345",
              borderRadius: 6,
              m: 2,
              p: 2,
              width: { md: "70%" },
              display: { xs: "none", md: "inherit" },
            }}
            elevation={20}
          >
            <h1 style={{ color: "yellow", fontSize: "clamp(1.2rem,5vw,2rem)" }}>
              kooApp
            </h1>
            <h1
              style={{ color: "white", fontStyle: "italic", marginTop: "5px" }}
            >
              Login and start expressing yourself in your own language
            </h1>
            <Box sx={{ mt: 4 }}>
              <Lottie options={defaultOptions} />
            </Box>
          </Paper>
        </Grid>
        {matches && <Lottie options={defaultOptions} />}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: { md: "78%" },
              // marginTop: { md: 20 },
              p: { xs: 2, md: 0 },
            }}
          >
            <form style={{ width: "100%" }} onSubmit={onSubmit}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item sm={8} md={12} xs={12}>
                  <CustomTextField
                    inputProps={{ style: { color: "white" } }}
                    autoComplete="off"
                    onChange={handleChange}
                    value={email}
                    fullWidth
                    name="email"
                    variant="outlined"
                    label="Email address"
                    type="email"
                  />
                </Grid>
                <Grid item sm={8} md={12} xs={12}>
                  <CustomTextField
                    autoComplete="off"
                    fullWidth
                    label="Password"
                    value={password}
                    name="password"
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    inputProps={{ style: { color: "white" } }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? (
                              <Visibility
                                style={{ color: "rgba(145, 158, 171, 0.32)" }}
                              />
                            ) : (
                              <VisibilityOff
                                style={{ color: "rgba(145, 158, 171, 0.32)" }}
                              />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ justifyContent: "center", display: "flex" }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      background: "rgb(0, 171, 85)",
                      boxShadow: "rgb(0 171 85 / 24%) 0px 8px 16px 0px",
                      padding: "12px 24px",
                      borderRadius: 5,
                      textTransform: "capitalize",
                      fontWeight: 600,
                      maxWidth: 520,
                      "&:hover": {
                        background: "orangered",
                        color: "black",
                      },
                      "&.MuiButtonBase-root:disabled": {
                        cursor: "not-allowed",
                        pointerEvents: "auto",
                        background: "rgb(0, 171, 85)",
                        opacity: "0.7",
                      },
                    }}
                    onClick={onSubmit}
                    fullWidth
                    disabled={showCaptcha}
                    startIcon={<LoginIcon />}
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
              {showCaptcha && (
                <Grid item xs={12}>
                  <div
                    style={{
                      display: "flex",
                      margin: "10px",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        textDecoration: "line-through",
                        color: "white",
                        background: "rgba(0, 0,0,0.5)",
                        padding: "10px 30px",
                        border: "4px solid orange",
                        borderRadius: "10px",
                        fontSize: "20px",
                      }}
                    >
                      {generatedCaptcha}
                    </p>
                    {captchaVerified && (
                      <p style={{ color: "white" }}>
                        captcha failed, try again
                      </p>
                    )}
                  </div>

                  <p style={{ margin: "10px 0", color: "white" }}>
                    enter captcha
                  </p>
                  <CustomTextField
                    label="captcha"
                    fullWidth
                    inputProps={{ style: { color: "white" } }}
                    placeholder="enter captcha"
                    onChange={handleCaptcha}
                    value={text}
                  />
                  <div style={{ display: "flex" }}>
                    <Button
                      sx={{ m: 2 }}
                      color="warning"
                      variant="contained"
                      onClick={verifyCaptcha}
                    >
                      verify
                    </Button>
                    <Button
                      sx={{ m: 2 }}
                      color="warning"
                      onClick={createCaptcha}
                      variant="contained"
                    >
                      generate new
                    </Button>
                  </div>
                </Grid>
              )}
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
