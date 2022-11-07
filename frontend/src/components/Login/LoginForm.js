import React, {useState} from 'react';
import { green } from '@material-ui/core/colors'
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
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  function handleLogin() {
    setMessage("");
    setLoading(true);

    AuthService.login(username, password).then(
      () => {
        setTimeout(() => { history.push('/'); }, 500);
      },
      error => {
        console.log("USERNAME: " + username, "PASSWORD" + password);
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
          console.log(resMessage);
          console.log(error);

        setLoading(false);
        setMessage(resMessage);
      }
    );
  }

  return (
    <div>
      <h2 style={{color: '#62D2A2', textAlign: 'center'}}>ElastiQR</h2>
      <Grid item xs={12} style={theme.flex}>
        <TextField label="Username" onChange={e => setUsername(e.target.value)}></TextField>
      </Grid>
      <Grid item xs={12} style={theme.flex}>
        <TextField label="Password" type={'password'} onChange={e => setPassword(e.target.value)}></TextField>
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