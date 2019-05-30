import React, { useState } from "react";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { makeStyles, withStyles } from "@material-ui/styles";
import { sizing, spacing, palette } from "@material-ui/system";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#458530"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#458530"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#458530"
      },
      "&:hover fieldset": {
        borderColor: "#458530"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#458530"
      }
    }
  }
})(TextField);

const LoginCard = props => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [togglePassword, setToggle] = useState(false);

  const handleClickShowPassword = () => {
    setToggle(!togglePassword);
  };

  return (
    <Box width="50%">
      <Paper>
        <Box mx={2} p={1}>
          <Box my={1} color="#458530">
            <Typography align="center" variant="h4" my={2}>
              Open Football
            </Typography>
          </Box>
          <CssTextField
            label="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            margin="dense"
            variant="outlined"
            type="email"
            fullWidth
          />
          <CssTextField
            label="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            margin="dense"
            variant="outlined"
            type={togglePassword ? "text" : "password"}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="Toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {togglePassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Box
            width={1}
            my={1}
            display="flex"
            justifyContent="space-between"
            color="#458530"
          >
            <Button color="inherit">Create an Account</Button>
            <Button color="inherit">Log In</Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginCard;
