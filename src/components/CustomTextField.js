import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
  "&.MuiTextField-root": {
    maxWidth: "530px",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 10,
    "& fieldset": {
      borderColor: "rgba(145, 158, 171, 0.32)",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(0, 171, 85)",
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(145, 158, 171, 0.32)",
  },
  "& label.Mui-focused": {
    color: "rgb(0, 171, 85)",
  },
});
export default CustomTextField;
