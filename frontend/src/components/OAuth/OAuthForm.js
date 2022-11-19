import React, {useState} from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Typography
} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import AuthService from "../../services/auth.service";
import LoadingButton from '../shared/LoadingButton';
import theme from '../../theme';
import TextInput from '../TextInput';

const OAuthForm = () => {

  const [checked, setChecked] = React.useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [nameHelp, setNameHelp] = useState("");
  const [passHelp, setPassHelp] = useState("");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  function handleLogin() {
    setNameHelp("");
    setPassHelp("");
    setPassError(false);
    setNameError(false);
    setLoading(true);

    AuthService.login(username, password).then(
      (response) => {
        AuthService.setAuthCode(username, Math.floor(Math.random()*1000)).then(
          () => {
            console.log("closing");
            window.open("about:blank", "_self");
            window.close();
          },
          error => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
              console.log(resMessage);
              console.log(error);
  
            setLoading(false);
          }
        );
      },
      (error) => {
        const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
        console.log(resMessage);
        console.log(error);

        setLoading(false);
        if (error.response.data === 'Password incorrect!') {
          setPassError(true);
          setPassHelp('Incorrect Password!');
        } else {
          setNameError(true);
          setNameHelp('Invalid Username!')
        }
      }
    )
  }

  return (
    <div>
      <Grid item xs={12} style={theme.flex}>
        <Typography variant="h4" style={theme.listTitle}>
          ElastiQR
        </Typography>
      </Grid>
      <Grid item xs={12} style={theme.flex}>
        <TextInput
          label="Username"
          value={username}
          onChangeValue={e => setUsername(e.target.value)}
          required={false}
          error={nameError}
          helperText={nameHelp}
        />
      </Grid>
      <Grid item xs={12} style={theme.flex}>
        <TextInput
          label="Password"
          value={password}
          onChangeValue={e => setPassword(e.target.value)}
          required={false}
          type={'password'}
          error={passError}
          helperText={passHelp}
        />
      </Grid>
      <Grid item xs={12}  style={theme.flex}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              label={'Keep me logged in'}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          }
          label="Keep me logged in"
          style={theme.keepLoggedIn}
        />
      </Grid>
      <Grid item xs={12} style={theme.logInSignUpButtonContainer}>
        <LoadingButton 
          onClick={handleLogin} 
          loading={loading}
          variant="contained"
          color="primary"
          fullWidth
          style={theme.logInSignUpButton}
        >
          <Typography variant="h6">
            Login
          </Typography>
        </LoadingButton>
      </Grid>
    </div>
  );
};

export default OAuthForm;