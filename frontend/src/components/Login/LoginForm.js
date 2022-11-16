import React, {useState} from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import AuthService from "../../services/auth.service";
import LoadingButton from '../shared/LoadingButton';
import theme from '../../theme';

const LoginForm = () => {
  let history = useHistory();

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
    setPassError(false)
    setNameError(false);
    setLoading(true);

    AuthService.login(username, password, checked).then(
      () => {
        setTimeout(() => { history.push('/'); }, 500);
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
        if (error.response.data === 'Password incorrect!') {
          setPassError(true);
          setPassHelp('Incorrect Password!');
        } else {
          setNameError(true);
          setNameHelp('Invalid Username!')
        }
      }
    );
  }

  return (
    <div>
      <h2 style={{color: '#62D2A2', textAlign: 'center'}}>ElastiQR</h2>
      <Grid item xs={12} style={theme.flex}>
        <TextField 
          label="Username" 
          onChange={e => setUsername(e.target.value)}
          error={nameError}
          helperText={nameHelp}>
        </TextField>
      </Grid>
      <Grid item xs={12} style={theme.flex}>
        <TextField label="Password" 
          type={'password'} 
          onChange={e => setPassword(e.target.value)}
          error={passError}
          helperText={passHelp}>
        </TextField>
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
        />
      </Grid>
      <Grid item xs={12} style={theme.flex}>
        <LoadingButton 
          onClick={handleLogin} 
          loading={loading}
          variant="contained"
          color="primary"
          fullWidth>
          Login
        </LoadingButton>
      </Grid>
    </div>
  );
};

export default LoginForm;